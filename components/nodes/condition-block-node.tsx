"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { GitBranch } from "lucide-react"

interface ConditionBlockData {
  blockType: string
  items?: Array<any>
}

export default function ConditionBlockNode({ data }: NodeProps<ConditionBlockData>) {
  const conditions = data.items || []

  return (
    <div className="bg-gray-800 border-2 border-yellow-500 border-dashed rounded-lg p-3 min-w-[280px] shadow-lg">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-start gap-3">
        <div className="bg-yellow-500/20 p-2 rounded">
          <GitBranch size={16} className="text-yellow-400" />
        </div>

        <div className="flex-1">
          <div className="text-xs text-yellow-400 font-medium mb-1">CONDITION</div>
          <div className="text-white text-sm">Conditional Logic</div>
          <div className="text-gray-400 text-xs mt-1">
            {conditions.length} condition{conditions.length !== 1 ? "s" : ""} defined
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
