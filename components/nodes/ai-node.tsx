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

export default function AINode({ id, data }: { id: string; data: any }) {
  return (
    <NodeWrapper ref={data.ref} accentColor="#8b5cf6" icon={Brain} badge="AI" className="w-[320px] max-w-[320px] bg-gray-900/60 rounded-none border-gray-700/80 shadow-none">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="text-white text-sm font-medium break-words whitespace-pre-line">Dify AI: {data.action}</div>

        <div className="text-gray-400 text-xs break-words whitespace-pre-line">
          {data.query.length > 50 ? `${data.query.substring(0, 47)}...` : data.query}
        </div>

        {data.description && <div className="text-gray-400 text-xs">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
