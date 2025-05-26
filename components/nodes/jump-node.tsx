"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { ArrowRight } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"

interface JumpNodeData {
  label: string
  targetGroup?: string
  targetBlock?: string
  description?: string
}

export default function JumpNode({ data }: NodeProps<JumpNodeData>) {
  return (
    <NodeWrapper accentColor="#ec4899" icon={ArrowRight} badge="JUMP" className="min-w-[280px]">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1">
        <div className="text-white text-sm font-medium mb-1">Jump to Group</div>

        <div className="text-gray-400 text-xs">
          → {data.targetGroup || "No target"}
          {data.targetBlock && ` (${data.targetBlock})`}
        </div>

        {data.description && <div className="text-gray-400 text-xs mt-1">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
