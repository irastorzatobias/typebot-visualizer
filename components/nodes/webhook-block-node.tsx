"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { Zap } from "lucide-react"

interface WebhookBlockData {
  blockType: string
  options?: {
    webhook?: { url?: string }
  }
}

export default function WebhookBlockNode({ data }: NodeProps<WebhookBlockData>) {
  const url = data.options?.webhook?.url || "No URL set"
  const domain = url !== "No URL set" ? new URL(url).hostname : "Invalid URL"

  return (
    <div className="bg-gray-800 border-2 border-orange-500 rounded-lg p-3 min-w-[280px] shadow-lg">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-start gap-3">
        <div className="bg-orange-500/20 p-2 rounded">
          <Zap size={16} className="text-orange-400" />
        </div>

        <div className="flex-1">
          <div className="text-xs text-orange-400 font-medium mb-1">WEBHOOK</div>
          <div className="text-white text-sm">Webhook Call</div>
          <div className="text-gray-400 text-xs mt-1">POST to {domain}</div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
