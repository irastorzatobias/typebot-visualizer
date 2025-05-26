"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { ArrowRight } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"

interface JumpNodeData {
  label: string
  targetGroup?: string
  targetBlock?: string
  description?: string
  ref?: React.RefObject<HTMLDivElement>
  targetGroupTitle?: string
  targetBlockLabel?: string
}

export default function JumpNode({ id, data }: { id: string; data: JumpNodeData }) {
  return (
    <NodeWrapper ref={data.ref} accentColor="#ec4899" icon={ArrowRight} badge="JUMP" className="w-[320px] max-w-[320px] bg-gray-900/60 rounded-none border-gray-700/80 shadow-none">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1 flex flex-col">
        <div className="text-white text-sm font-medium break-words whitespace-pre-line">
          Jump to
        </div>
        <h1 className="text-white text-sm font-bold break-words whitespace-pre-line">
          {data.targetGroupTitle || data.targetGroup || "No target"}
        </h1>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
