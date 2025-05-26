"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { Brain } from "lucide-react"

interface AIBlockData {
  blockType: string
  options?: {
    action?: string
    query?: string
  }
}

export default function AIBlockNode({ data }: NodeProps<AIBlockData>) {
  const action = data.options?.action || "AI Action"
  const query = data.options?.query || "No query set"

  return (
    <div className="bg-gray-800 border-2 border-purple-500 rounded-lg p-3 min-w-[280px] shadow-lg">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-start gap-3">
        <div className="bg-purple-500/20 p-2 rounded">
          <Brain size={16} className="text-purple-400" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-xs text-purple-400 font-medium mb-1">DIFY AI</div>
          <div className="text-white text-sm font-medium">{action}</div>
          <div className="text-gray-400 text-xs mt-1 break-words">
            {query.length > 50 ? `${query.substring(0, 47)}...` : query}
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
