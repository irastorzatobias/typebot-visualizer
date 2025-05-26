"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { MessageSquare, Edit } from "lucide-react"

interface TextBlockData {
  blockType: string
  content?: {
    richText?: Array<{
      children?: Array<{ text: string }>
    }>
  }
  onEdit: (nodeId: string) => void
}

export default function TextBlockNode({ id, data }: NodeProps<TextBlockData>) {
  const getText = () => {
    return (
      data.content?.richText?.map((rt) => rt.children?.map((child) => child.text).join("") || "").join(" ") ||
      "Empty message"
    )
  }

  return (
    <div className="bg-gray-800 border-2 border-blue-500 rounded-lg p-3 min-w-[280px] shadow-lg">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-start gap-3">
        <div className="bg-blue-500/20 p-2 rounded">
          <MessageSquare size={16} className="text-blue-400" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-xs text-blue-400 font-medium mb-1">TEXT MESSAGE</div>
          <div className="text-white text-sm leading-relaxed break-words">{getText()}</div>
          <div className="text-gray-400 text-xs mt-2">Message to user</div>
        </div>

        <button onClick={() => data.onEdit(id)} className="p-1 hover:bg-gray-700 rounded transition-colors">
          <Edit size={14} className="text-gray-400" />
        </button>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
