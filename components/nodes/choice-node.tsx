"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { MousePointer } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"

interface ChoiceNodeData {
  label: string
  choices: string[]
  description?: string
}

export default function ChoiceNode({ id, data }: { id: string; data: any }) {
  return (
    <NodeWrapper ref={data.ref} accentColor="#8b5cf6" icon={MousePointer} badge="CHOICE" className="w-[320px] max-w-[320px] bg-gray-900/60 rounded-none border-gray-700/80 shadow-none">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1 flex flex-col">
        <div className="text-white text-sm font-medium break-words whitespace-pre-line">Choose from {data.choices.length} options</div>

        <div>
          {data.choices.slice(0, 4).map((choice: any, index: number) => (
            <div key={index} className="relative bg-gray-700 border border-purple-500/30 rounded px-3 py-2 text-sm text-white break-words whitespace-pre-line flex items-center">
              {choice}
              <Handle
                type="source"
                position={Position.Right}
                id={`choice-${index}`}
                className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2"
              />
            </div>
          ))}

          {data.choices.length > 4 && (
            <div className="text-gray-400 text-xs italic">+{data.choices.length - 4} more options...</div>
          )}
        </div>

        {data.description && <div className="text-gray-400 text-xs">{data.description}</div>}
      </div>
    </NodeWrapper>
  )
}
