"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { ArrowRight } from "lucide-react"

interface JumpBlockData {
  blockType: string
  options?: {
    groupId?: string
    blockId?: string
  }
}

export default function JumpBlockNode({ data }: NodeProps<JumpBlockData>) {
  const targetGroup = data.options?.groupId || "No target"
  const targetBlock = data.options?.blockId || ""

  return (
    <div className="bg-gray-800 border-2 border-pink-500 rounded-lg p-3 min-w-[280px] shadow-lg">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-start gap-3">
        <div className="bg-pink-500/20 p-2 rounded">
          <ArrowRight size={16} className="text-pink-400" />
        </div>

        <div className="flex-1">
          <div className="text-xs text-pink-400 font-medium mb-1">JUMP</div>
          <div className="text-white text-sm font-medium">Jump to Group</div>
          <div className="text-gray-400 text-xs mt-1">
            → {targetGroup}
            {targetBlock && ` (${targetBlock})`}
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
