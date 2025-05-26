"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { Database } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"

interface VariableNodeData {
  label: string
  variableId: string
  expression: string
  description?: string
}

export default function VariableNode({ id, data }: { id: string; data: any }) {
  return (
    <NodeWrapper ref={data.ref} accentColor="#6366f1" icon={Database} badge="VARIABLE" className="w-[320px] max-w-[320px] bg-gray-900/60 rounded-none border-gray-700/80 shadow-none">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="text-white text-sm font-medium break-words whitespace-pre-line">Set {data.variableId}</div>

        <div className="text-gray-400 text-xs break-words whitespace-pre-line">
          {data.expression.length > 60 ? `${data.expression.substring(0, 57)}...` : data.expression}
        </div>

        {data.description && <div className="text-gray-400 text-xs">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
