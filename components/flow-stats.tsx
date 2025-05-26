"use client"

import { Panel } from "@xyflow/react"
import type { TypebotData } from "@/types/typebot"

interface FlowStatsProps {
  data: TypebotData
}

export function FlowStats({ data }: FlowStatsProps) {
  const totalBlocks = data.typebot.groups.reduce((acc, group) => acc + group.blocks.length, 0)

  return (
    <Panel position="top-right" className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-gray-600">
      <div className="text-white text-sm space-y-2">
        <div className="font-semibold text-gray-200 mb-3">Flow Statistics</div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Events:</span>
          <span className="font-medium text-red-400">{data.typebot.events.length}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Groups:</span>
          <span className="font-medium text-blue-400">{data.typebot.groups.length}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Blocks:</span>
          <span className="font-medium text-green-400">{totalBlocks}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Connections:</span>
          <span className="font-medium text-purple-400">{data.typebot.edges.length}</span>
        </div>
      </div>
    </Panel>
  )
}
