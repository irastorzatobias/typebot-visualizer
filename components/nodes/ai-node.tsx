"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { Brain } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"

interface AINodeData {
  label: string
  action: string
  query: string
  description?: string
}

export default function AINode({ data }: NodeProps<AINodeData>) {
  return (
    <NodeWrapper accentColor="#8b5cf6" icon={Brain} badge="AI" className="min-w-[280px]">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-medium mb-1">Dify AI: {data.action}</div>

        <div className="text-gray-400 text-xs break-words">
          {data.query.length > 50 ? `${data.query.substring(0, 47)}...` : data.query}
        </div>

        {data.description && <div className="text-gray-400 text-xs mt-1">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
