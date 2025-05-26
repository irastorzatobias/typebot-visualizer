"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { MousePointer } from "lucide-react"

interface ChoiceBlockData {
  blockType: string
  items?: Array<{ content: string }>
}

export default function ChoiceBlockNode({ data }: NodeProps<ChoiceBlockData>) {
  const choices = data.items || []

  return (
    <div className="bg-gray-800 border-2 border-purple-500 rounded-lg p-3 min-w-[280px] shadow-lg">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-start gap-3 mb-3">
        <div className="bg-purple-500/20 p-2 rounded">
          <MousePointer size={16} className="text-purple-400" />
        </div>

        <div className="flex-1">
          <div className="text-xs text-purple-400 font-medium mb-1">CHOICE INPUT</div>
          <div className="text-white text-sm">Choose from {choices.length} options</div>
        </div>
      </div>

      <div className="space-y-2">
        {choices.slice(0, 4).map((choice, index) => (
          <div key={index} className="bg-gray-700 border border-purple-500/30 rounded px-3 py-2 text-sm text-white">
            {choice.content}
          </div>
        ))}
        {choices.length > 4 && (
          <div className="text-gray-400 text-xs italic">+{choices.length - 4} more options...</div>
        )}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
