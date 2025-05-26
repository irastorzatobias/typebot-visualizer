"use client"

import { useCallback, useMemo, useRef, useLayoutEffect } from "react"
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  BackgroundVariant,
  MarkerType,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import { nodeTypes } from "@/components/nodes"
import { convertTypebotToFlow } from "@/lib/flow-converter"
import { FlowStats } from "@/components/flow-stats"
import type { TypebotData } from "@/types/typebot"

interface FlowVisualizerProps {
  data: TypebotData
}

export default function FlowVisualizer({ data }: FlowVisualizerProps) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    return convertTypebotToFlow(data)
  }, [data])

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  // --- Absolute stacking logic ---
  const blockRefs = useRef<{ [id: string]: HTMLDivElement | null }>({})

  useLayoutEffect(() => {
    // Agrupa nodos por grupo
    const groupBlocks: { [groupId: string]: Node[] } = {}
    nodes.forEach((node) => {
      if (node.type !== "groupNode") {
        // Encuentra el grupo al que pertenece por posición X/Y
        const group = nodes.find(
          (g) => g.type === "groupNode" && Math.abs(node.position.x - (g.position.x + 20)) < 5
        )
        if (group) {
          if (!groupBlocks[group.id]) groupBlocks[group.id] = []
          groupBlocks[group.id].push(node)
        }
      }
    })
    // Para cada grupo, calcula posiciones Y acumuladas
    const newNodes = nodes.map((node) => {
      if (node.type === "groupNode") return node
      // Encuentra el grupo
      const group = nodes.find(
        (g) => g.type === "groupNode" && Math.abs(node.position.x - (g.position.x + 20)) < 5
      )
      if (!group) return node
      const siblings = groupBlocks[group.id] || []
      // Ordena por Y original
      siblings.sort((a, b) => a.position.y - b.position.y)
      let y = group.position.y + 60
      for (const sib of siblings) {
        if (sib.id === node.id) break
        const ref = blockRefs.current[sib.id]
        y += ref?.getBoundingClientRect().height || 80
      }
      return { ...node, position: { ...node.position, y } }
    })
    setNodes(newNodes)
    // eslint-disable-next-line
  }, [])

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <div className="w-full h-full bg-gray-950">
      <ReactFlow
        nodes={nodes.map((node) =>
          node.type !== "groupNode"
            ? {
                ...node,
                data: {
                  ...node.data,
                  ref: (el: HTMLDivElement | null) => {
                    blockRefs.current[node.id] = el
                  },
                },
              }
            : node
        )}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        attributionPosition="bottom-left"
        className="bg-gray-950"
        defaultEdgeOptions={{
          type: "default",
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: "#6b7280",
            width: 20,
            height: 20,
          },
          style: {
            stroke: "#6b7280",
            strokeWidth: 2,
          },
        }}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#374151" />

        <Controls className="bg-gray-800 border-gray-600 [&>button]:bg-gray-700 [&>button]:border-gray-600 [&>button]:text-white [&>button:hover]:bg-gray-600" />

        <MiniMap className="bg-gray-800 border-gray-600" nodeColor="#374151" maskColor="rgba(0, 0, 0, 0.2)" />

        <FlowStats data={data} />
      </ReactFlow>
    </div>
  )
}
