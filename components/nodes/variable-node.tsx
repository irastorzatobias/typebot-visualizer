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

export default function VariableNode({ data }: NodeProps<VariableNodeData>) {
  return (
    <NodeWrapper accentColor="#6366f1" icon={Database} badge="VARIABLE" className="min-w-[280px]">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-medium mb-1">Set {data.variableId}</div>

        <div className="text-gray-400 text-xs break-words">
          {data.expression.length > 60 ? `${data.expression.substring(0, 57)}...` : data.expression}
        </div>

        {data.description && <div className="text-gray-400 text-xs mt-1">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
