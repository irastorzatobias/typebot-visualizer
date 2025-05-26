"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { Play } from "lucide-react"

interface StartEventData {
  label: string
  description: string
}

export default function StartEventNode({ data }: NodeProps<StartEventData>) {
  return (
    <div className="bg-gray-800 border-2 border-red-500 rounded-lg p-3 min-w-[200px] shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-red-500/20 p-2 rounded">
          <Play size={16} className="text-red-400" />
        </div>

        <div className="flex-1">
          <div className="text-xs text-red-400 font-medium mb-1">START</div>
          <div className="text-white text-sm font-medium">{data.label}</div>
          <div className="text-gray-400 text-xs">{data.description}</div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
