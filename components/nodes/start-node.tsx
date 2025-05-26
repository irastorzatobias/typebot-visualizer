"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { Play } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"

interface StartNodeData {
  label: string
  description?: string
}

export default function StartNode({ data }: NodeProps<StartNodeData>) {
  return (
    <NodeWrapper accentColor="#dc2626" icon={Play} badge="START" className="min-w-[200px]">
      <div className="flex-1">
        <div className="text-white text-sm font-medium">{data.label}</div>

        {data.description && <div className="text-gray-400 text-xs mt-1">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
