"use client"

import type React from "react"

import { useCallback, useMemo, useState, useRef, useEffect } from "react"
import {
  MessageSquare,
  MousePointer,
  Type,
  Settings,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Check,
  X,
  ArrowRight,
  Database,
  Brain,
  Maximize2,
} from "lucide-react"
import type { NodeTypes } from "reactflow"
import "reactflow/dist/style.css"

import TextBlockNode from "./nodes/text-block-node"
import ChoiceBlockNode from "./nodes/choice-block-node"
import InputBlockNode from "./nodes/input-block-node"
import JumpBlockNode from "./nodes/jump-block-node"
import VariableBlockNode from "./nodes/variable-block-node"
import ConditionBlockNode from "./nodes/condition-block-node"
import AIBlockNode from "./nodes/ai-block-node"
import WebhookBlockNode from "./nodes/webhook-block-node"
import StartEventNode from "./nodes/start-event-node"

const nodeTypes: NodeTypes = {
  textBlock: TextBlockNode,
  choiceBlock: ChoiceBlockNode,
  inputBlock: InputBlockNode,
  jumpBlock: JumpBlockNode,
  variableBlock: VariableBlockNode,
  conditionBlock: ConditionBlockNode,
  aiBlock: AIBlockNode,
  webhookBlock: WebhookBlockNode,
  startEvent: StartEventNode,
}

interface TypebotData {
  typebot: {
    id: string
    name: string
    events: Array<{
      id: string
      outgoingEdgeId?: string
      graphCoordinates: { x: number; y: number }
      type: string
    }>
    groups: Array<{
      id: string
      title: string
      graphCoordinates: { x: number; y: number }
      blocks: Array<{
        id: string
        outgoingEdgeId?: string
        type: string
        content?: any
        items?: any[]
        options?: any
      }>
    }>
    edges: Array<{
      id: string
      from: {
        eventId?: string
        blockId?: string
        itemId?: string
      }
      to: {
        groupId?: string
        blockId?: string
      }
    }>
  }
}

interface FlowNode {
  id: string
  type: "event" | "group" | "block"
  x: number
  y: number
  width: number
  height: number
  data: any
}

interface FlowEdge {
  id: string
  fromId: string
  toId: string
  fromX: number
  fromY: number
  toX: number
  toY: number
}

export default function BotVisualizer({ data }: { data: TypebotData }) {
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.8 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [editingNode, setEditingNode] = useState<string | null>(null)
  const [editingText, setEditingText] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const blockWidth = 340

  const getBlockTypeInfo = (block: any) => {
    const type = block.type

    switch (type) {
      case "text":
        const textContent =
          block.content?.richText
            ?.map((rt: any) => rt.children?.map((child: any) => child.text).join("") || "")
            .join(" ") || "Empty message"
        return {
          primaryText: textContent,
          secondaryText: "Message to user",
          tertiaryText: "TEXT",
          accentColor: "#3b82f6",
          icon: MessageSquare,
          fullText: textContent,
        }

      case "choice input":
        const choices = block.items || []
        const choiceTexts = choices.map((item: any) => item.content).filter(Boolean)
        return {
          primaryText: `Choose from ${choices.length} options`,
          secondaryText: choiceTexts.length > 0 ? "Multiple choice question" : "No options set",
          tertiaryText: "CHOICE",
          accentColor: "#8b5cf6",
          icon: MousePointer,
          items: choiceTexts,
        }

      case "text input":
        const placeholder = block.options?.labels?.placeholder || "Enter text"
        const variableName = block.options?.variableId ? `Saves to: ${block.options.variableId}` : ""
        return {
          primaryText: placeholder,
          secondaryText: variableName || "Text input field",
          tertiaryText: "INPUT",
          accentColor: "#10b981",
          icon: Type,
        }

      case "Set variable":
        const variableId = block.options?.variableId || "Unknown variable"
        const expression = block.options?.expressionToEvaluate || block.options?.type || "No expression"
        return {
          primaryText: `Set ${variableId}`,
          secondaryText: expression.length > 50 ? `${expression.substring(0, 47)}...` : expression,
          tertiaryText: "VARIABLE",
          accentColor: "#6366f1",
          icon: Database,
          fullText: expression,
        }

      case "Jump":
        const targetGroup = block.options?.groupId ? `→ ${block.options.groupId}` : "No target set"
        const targetBlock = block.options?.blockId ? ` (${block.options.blockId})` : ""
        return {
          primaryText: "Jump to Group",
          secondaryText: `${targetGroup}${targetBlock}`,
          tertiaryText: "JUMP",
          accentColor: "#ec4899",
          icon: ArrowRight,
        }

      case "dify-ai":
        const action = block.options?.action || "AI Action"
        const query = block.options?.query || "No query set"
        return {
          primaryText: `Dify AI: ${action}`,
          secondaryText: query.length > 40 ? `${query.substring(0, 37)}...` : query,
          tertiaryText: "AI",
          accentColor: "#8b5cf6",
          icon: Brain,
          fullText: query,
        }

      default:
        return {
          primaryText: type.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()),
          secondaryText: "Custom block type",
          tertiaryText: type.toUpperCase(),
          accentColor: "#6b7280",
          icon: Settings,
        }
    }
  }

  const { nodes, edges, bounds } = useMemo(() => {
    const nodes: FlowNode[] = []
    const edges: FlowEdge[] = []

    // Process events
    data.typebot.events.forEach((event) => {
      nodes.push({
        id: event.id,
        type: "event",
        x: event.graphCoordinates.x,
        y: event.graphCoordinates.y,
        width: 200,
        height: 80,
        data: {
          label: "Start Point",
          description: data.typebot.name,
          blockType: event.type,
          accentColor: "#dc2626",
        },
      })
    })

    // Process groups and blocks
    data.typebot.groups.forEach((group) => {
      const blockHeight = 100
      const blockSpacing = 20
      const groupPadding = 20
      const headerHeight = 50
      const groupWidth = 380
      const blockWidth = 340

      // Calculate total height needed for blocks
      const totalBlocksHeight = group.blocks.reduce((acc, block) => {
        const blockInfo = getBlockTypeInfo(block)
        let height = blockHeight
        if (blockInfo.items && blockInfo.items.length > 0) {
          const visibleItems = Math.min(blockInfo.items.length, 4)
          height = blockHeight + visibleItems * 30 + (blockInfo.items.length > 4 ? 25 : 0)
        }
        return acc + height + blockSpacing
      }, 0) - blockSpacing // Remove last spacing

      const groupHeight = headerHeight + totalBlocksHeight + groupPadding * 2

      // Add group container
      nodes.push({
        id: group.id,
        type: "group",
        x: group.graphCoordinates.x,
        y: group.graphCoordinates.y,
        width: groupWidth,
        height: groupHeight,
        data: {
          title: group.title || "Untitled Group",
          blockCount: group.blocks.length,
          blocks: group.blocks.map((block, index) => {
            const blockInfo = getBlockTypeInfo(block)
            let height = blockHeight
            if (blockInfo.items && blockInfo.items.length > 0) {
              const visibleItems = Math.min(blockInfo.items.length, 4)
              height = blockHeight + visibleItems * 30 + (blockInfo.items.length > 4 ? 25 : 0)
            }
            return {
              ...block,
              ...blockInfo,
              height,
              y: headerHeight + groupPadding + index * (blockHeight + blockSpacing)
            }
          })
        }
      })
    })

    // Process edges
    data.typebot.edges.forEach((edge) => {
      const fromNode = nodes.find((n) => n.id === edge.from.eventId || n.id === edge.from.blockId)
      const toNode = nodes.find((n) => n.id === edge.to.groupId || n.id === edge.to.blockId)

      if (fromNode && toNode) {
        edges.push({
          id: edge.id,
          fromId: fromNode.id,
          toId: toNode.id,
          fromX: fromNode.x + fromNode.width,
          fromY: fromNode.y + fromNode.height / 2,
          toX: toNode.x,
          toY: toNode.y + toNode.height / 2,
        })
      }
    })

    // Calculate bounds
    const minX = Math.min(...nodes.map((n) => n.x)) - 100
    const minY = Math.min(...nodes.map((n) => n.y)) - 100
    const maxX = Math.max(...nodes.map((n) => n.x + n.width)) + 100
    const maxY = Math.max(...nodes.map((n) => n.y + n.height)) + 100

    return { nodes, edges, bounds: { minX, minY, maxX, maxY } }
  }, [data])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (editingNode) return
      setIsDragging(true)
      setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y })
    },
    [transform, editingNode],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && !editingNode) {
        setTransform((prev) => ({
          ...prev,
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        }))
      }
    },
    [isDragging, dragStart, editingNode],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (editingNode) return
      e.preventDefault()
      const delta = e.deltaY > 0 ? 0.9 : 1.1
      setTransform((prev) => ({
        ...prev,
        scale: Math.max(0.1, Math.min(3, prev.scale * delta)),
      }))
    },
    [editingNode],
  )

  const handleNodeClick = (node: FlowNode) => {
    if (node.data.blockType === "text" && node.type === "block") {
      setEditingNode(node.id)
      setEditingText(node.data.fullText || node.data.primaryText || "")
    }
  }

  const handleTextSave = () => {
    console.log("Saving text:", editingText, "for node:", editingNode)
    setEditingNode(null)
    setEditingText("")
  }

  const handleTextCancel = () => {
    setEditingNode(null)
    setEditingText("")
  }

  const resetView = () => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const centerX = containerRect.width / 2
      const centerY = containerRect.height / 2
      const flowCenterX = (bounds.minX + bounds.maxX) / 2
      const flowCenterY = (bounds.minY + bounds.maxY) / 2

      setTransform({
        x: centerX - flowCenterX * 0.8,
        y: centerY - flowCenterY * 0.8,
        scale: 0.8,
      })
    }
  }

  const fitToView = () => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const flowWidth = bounds.maxX - bounds.minX
      const flowHeight = bounds.maxY - bounds.minY

      const scaleX = (containerRect.width - 100) / flowWidth
      const scaleY = (containerRect.height - 100) / flowHeight
      const scale = Math.min(scaleX, scaleY, 1)

      const centerX = containerRect.width / 2
      const centerY = containerRect.height / 2
      const flowCenterX = (bounds.minX + bounds.maxX) / 2
      const flowCenterY = (bounds.minY + bounds.maxY) / 2

      setTransform({
        x: centerX - flowCenterX * scale,
        y: centerY - flowCenterY * scale,
        scale,
      })
    }
  }

  useEffect(() => {
    resetView()
  }, [])

  const createSmoothPath = (edge: FlowEdge) => {
    const dx = edge.toX - edge.fromX
    const dy = edge.toY - edge.fromY
    const distance = Math.sqrt(dx * dx + dy * dy)
    const controlPointOffset = Math.min(distance * 0.4, 150)

    return `M ${edge.fromX} ${edge.fromY} C ${edge.fromX + controlPointOffset} ${edge.fromY}, ${edge.toX - controlPointOffset} ${edge.toY}, ${edge.toX} ${edge.toY}`
  }

  const getNodeIcon = (node: FlowNode) => {
    const IconComponent = node.data.icon || Settings
    return <IconComponent size={18} className="text-white" />
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Controls */}
      <div className="absolute top-6 left-6 bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl border border-gray-600 shadow-xl z-10">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setTransform((prev) => ({ ...prev, scale: Math.min(3, prev.scale * 1.2) }))}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            title="Zoom In"
          >
            <ZoomIn size={16} className="text-white" />
          </button>
          <button
            onClick={() => setTransform((prev) => ({ ...prev, scale: Math.max(0.1, prev.scale * 0.8) }))}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            title="Zoom Out"
          >
            <ZoomOut size={16} className="text-white" />
          </button>
          <button
            onClick={fitToView}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            title="Fit to View"
          >
            <Maximize2 size={16} className="text-white" />
          </button>
          <button
            onClick={resetView}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            title="Reset View"
          >
            <RotateCcw size={16} className="text-white" />
          </button>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">{Math.round(transform.scale * 100)}%</div>
      </div>

      {/* Main Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div
          className="relative origin-top-left transition-transform duration-100"
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            width: bounds.maxX - bounds.minX,
            height: bounds.maxY - bounds.minY,
          }}
        >
          {/* Background Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(55, 65, 81, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(55, 65, 81, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              left: bounds.minX,
              top: bounds.minY,
              width: bounds.maxX - bounds.minX,
              height: bounds.maxY - bounds.minY,
            }}
          />

          {/* Edges */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{
              left: bounds.minX,
              top: bounds.minY,
              width: bounds.maxX - bounds.minX,
              height: bounds.maxY - bounds.minY,
            }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="6"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,12 L12,6 z" fill="#6b7280" />
              </marker>
            </defs>

            {edges.map((edge) => (
              <g key={edge.id}>
                <circle
                  cx={edge.fromX - bounds.minX}
                  cy={edge.fromY - bounds.minY}
                  r="4"
                  fill="#6b7280"
                  stroke="#374151"
                  strokeWidth="2"
                />
                <path
                  d={createSmoothPath({
                    ...edge,
                    fromX: edge.fromX - bounds.minX,
                    fromY: edge.fromY - bounds.minY,
                    toX: edge.toX - bounds.minX,
                    toY: edge.toY - bounds.minY,
                  })}
                  stroke="#6b7280"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="transition-all duration-200 hover:stroke-blue-400"
                />
              </g>
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            if (node.type === "group") {
              return (
                <div
                  key={node.id}
                  className="absolute bg-gray-900/60 border border-gray-600 rounded-xl backdrop-blur-sm"
                  style={{
                    left: node.x - bounds.minX,
                    top: node.y - bounds.minY,
                    width: node.width,
                    height: node.height,
                  }}
                >
                  {/* Group Header */}
                  <div className="bg-gray-800/80 p-3 rounded-t-xl border-b border-gray-600">
                    <h3 className="text-white font-semibold text-sm">{node.data.title}</h3>
                    <p className="text-gray-400 text-xs">{node.data.blockCount} blocks</p>
                  </div>

                  {/* Blocks Container */}
                  <div className="relative p-5">
                    {node.data.blocks.map((block: any) => (
                      <div
                        key={block.id}
                        className="relative mb-5 last:mb-0 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                        style={{
                          height: block.height,
                        }}
                        onClick={() => handleNodeClick({ ...node, data: block })}
                      >
                        {/* Shadow */}
                        <div
                          className="absolute bg-black/30 rounded-lg blur-sm"
                          style={{
                            left: 4,
                            top: 4,
                            width: blockWidth,
                            height: block.height,
                          }}
                        />

                        {/* Main Block */}
                        <div
                          className="relative bg-gray-800 rounded-lg border-2 p-4 shadow-xl"
                          style={{
                            borderColor: block.accentColor,
                            width: blockWidth,
                            height: block.height,
                          }}
                        >
                          {/* Icon */}
                          <div
                            className="absolute top-3 left-3 p-2 rounded"
                            style={{ backgroundColor: `${block.accentColor}20` }}
                          >
                            <div style={{ color: block.accentColor }}>
                              {block.icon ? <block.icon size={18} className="text-white" /> : <Settings size={18} className="text-white" />}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="ml-12 h-full flex flex-col">
                            <div className="text-xs font-medium mb-1" style={{ color: block.accentColor }}>
                              {block.tertiaryText}
                            </div>

                            <div className="text-white text-sm font-medium leading-relaxed flex-1 overflow-hidden">
                              {block.fullText || block.primaryText}
                            </div>

                            <div className="text-gray-400 text-xs mt-2">{block.secondaryText}</div>

                            {/* Choice options */}
                            {block.items && block.items.length > 0 && (
                              <div className="mt-3 space-y-2">
                                {block.items.slice(0, 4).map((item: string, index: number) => (
                                  <div
                                    key={index}
                                    className="bg-gray-700 border rounded px-2 py-1 text-xs text-white"
                                    style={{ borderColor: `${block.accentColor}40` }}
                                  >
                                    {item}
                                  </div>
                                ))}
                                {block.items.length > 4 && (
                                  <div className="text-gray-400 text-xs italic">
                                    +{block.items.length - 4} more options...
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Connection point */}
                          <div
                            className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-gray-600"
                            style={{ backgroundColor: block.accentColor }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            } else if (node.type === "event") {
              return (
                <div
                  key={node.id}
                  className="absolute cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{
                    left: node.x - bounds.minX,
                    top: node.y - bounds.minY,
                    width: node.width,
                    height: node.height,
                  }}
                >
                  {/* Event node content remains unchanged */}
                  <div
                    className="relative bg-gray-800 rounded-lg border-2 p-4 shadow-xl"
                    style={{
                      borderColor: node.data.accentColor,
                      width: node.width,
                      height: node.height,
                    }}
                  >
                    {/* ... existing event node content ... */}
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>

      {/* Text Editing Modal */}
      {editingNode && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 shadow-2xl max-w-lg w-full mx-4">
            <h3 className="text-white text-lg font-semibold mb-4">Edit Text Content</h3>
            <textarea
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="w-full h-32 px-3 py-2 text-sm bg-gray-700 text-white border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your text content..."
              autoFocus
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleTextSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Check size={16} />
                Save Changes
              </button>
              <button
                onClick={handleTextCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X size={16} />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-6 right-6 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-600 shadow-xl">
        <h3 className="text-white text-sm font-semibold mb-3">Block Types</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
            <span className="text-gray-200">Start Events</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            <span className="text-gray-200">Text Messages</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
            <span className="text-gray-200">User Inputs</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
            <span className="text-gray-200">Choice & AI</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-indigo-500 rounded-sm"></div>
            <span className="text-gray-200">Variables</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-pink-500 rounded-sm"></div>
            <span className="text-gray-200">Flow Control</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-6 left-6 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-600 shadow-xl">
        <div className="text-sm text-gray-200 space-y-2">
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-400">Events:</span>
            <span className="font-semibold text-red-400">{data.typebot.events.length}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-400">Groups:</span>
            <span className="font-semibold text-blue-400">{data.typebot.groups.length}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-400">Blocks:</span>
            <span className="font-semibold text-green-400">
              {data.typebot.groups.reduce((acc, group) => acc + group.blocks.length, 0)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-400">Connections:</span>
            <span className="font-semibold text-purple-400">{data.typebot.edges.length}</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 right-6 bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl border border-gray-600 shadow-xl">
        <div className="text-xs text-gray-300 space-y-1">
          <div>🖱️ Drag to pan</div>
          <div>🔍 Scroll to zoom</div>
          <div>✏️ Click text blocks to edit</div>
          <div>🎯 Use controls to navigate</div>
        </div>
      </div>
    </div>
  )
}
