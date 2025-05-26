"use client"
import { Handle, Position, type NodeProps } from "reactflow"
import { Type } from "lucide-react"

interface InputBlockData {
  blockType: string
  options?: {
    labels?: { placeholder?: string }
    variableId?: string
  }
}

export default function InputBlockNode({ data }: NodeProps<InputBlockData>) {
  const placeholder = data.options?.labels?.placeholder || "Enter text"
  const variableId = data.options?.variableId || ""

  return (
    <div className="bg-gray-800 border-2 border-green-500 rounded-lg p-3 min-w-[280px] shadow-lg">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-start gap-3">
        <div className="bg-green-500/20 p-2 rounded">
          <Type size={16} className="text-green-400" />
        </div>

        <div className="flex-1">
          <div className="text-xs text-green-400 font-medium mb-1">{data.blockType.toUpperCase()}</div>
          <div className="text-white text-sm">{placeholder}</div>
          {variableId && <div className="text-gray-400 text-xs mt-1">Saves to: {variableId}</div>}
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  )
}
