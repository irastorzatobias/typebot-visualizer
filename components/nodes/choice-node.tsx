"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { MousePointer } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"

interface ChoiceNodeData {
  label: string
  choices: string[]
  description?: string
}

export default function ChoiceNode({ data }: NodeProps<ChoiceNodeData>) {
  return (
    <NodeWrapper accentColor="#8b5cf6" icon={MousePointer} badge="CHOICE" className="min-w-[320px]">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1">
        <div className="text-white text-sm font-medium mb-3">Choose from {data.choices.length} options</div>

        <div className="space-y-2">
          {data.choices.slice(0, 4).map((choice, index) => (
            <div key={index} className="bg-gray-700 border border-purple-500/30 rounded px-3 py-2 text-sm text-white">
              {choice}
            </div>
          ))}

          {data.choices.length > 4 && (
            <div className="text-gray-400 text-xs italic">+{data.choices.length - 4} more options...</div>
          )}
        </div>

        {data.description && <div className="text-gray-400 text-xs mt-2">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
