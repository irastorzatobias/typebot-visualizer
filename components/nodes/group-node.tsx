"use client"

import type { NodeProps } from "@xyflow/react"

interface GroupNodeData {
  label: string
  blockCount: number
}

export default function GroupNode({ id, data }: { id: string; data: any }) {
  return (
    <div className="absolute left-5 z-10 px-2">
      <div className="text-white font-bold text-base leading-tight drop-shadow-sm">{data.label}</div>
      <div className="text-gray-400 text-xs">{data.blockCount} blocks</div>
    </div>
  )
}
