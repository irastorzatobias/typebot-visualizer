"use client"

import type { NodeProps } from "@xyflow/react"

interface GroupNodeData {
  label: string
  blockCount: number
}

export default function GroupNode({ data }: NodeProps<GroupNodeData>) {
  return (
    <div className="bg-gray-900/60 border border-gray-600 rounded-xl backdrop-blur-sm p-4 min-w-[350px]">
      <div className="text-white font-medium text-sm mb-1">{data.label}</div>
      <div className="text-gray-400 text-xs">{data.blockCount} blocks</div>
    </div>
  )
}
