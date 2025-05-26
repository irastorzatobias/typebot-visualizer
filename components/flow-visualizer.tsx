"use client"

import { useCallback, useMemo } from "react"
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

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <div className="w-full h-full bg-gray-950">
      <ReactFlow
        nodes={nodes}
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
