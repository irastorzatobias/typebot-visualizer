"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { Database } from "lucide-react"

interface VariableBlockData {
  blockType: string
  options?: {
    variableId?: string
    expressionToEvaluate?: string
    type?: string
  }
}

export default function VariableBlockNode({ data }: NodeProps<VariableBlockData>) {
  const variableId = data.options?.variableId || "Unknown variable"
  const expression = data.options?.expressionToEvaluate || data.options?.type || "No expression"

  return (
    <div className="bg-gray-800 border-2 border-indigo-500 rounded-lg p-3 min-w-[280px] shadow-lg">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-start gap-3">
        <div className="bg-indigo-500/20 p-2 rounded">
          <Database size={16} className="text-indigo-400" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-xs text-indigo-400 font-medium mb-1">SET VARIABLE</div>
          <div className="text-white text-sm font-medium">Set {variableId}</div>
          <div className="text-gray-400 text-xs mt-1 break-words">
            {expression.length > 60 ? `${expression.substring(0, 57)}...` : expression}
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
