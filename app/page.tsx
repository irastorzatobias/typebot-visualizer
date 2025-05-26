"use client"
import FlowVisualizer from "@/components/flow-visualizer"
import { typebotData } from "@/lib/sample-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="border-b border-gray-800 p-4">
        <h1 className="text-2xl font-bold text-white">TypeBot Flow Visualizer</h1>
        <p className="text-gray-400 mt-1">
          {typebotData.typebot.name} • {typebotData.typebot.id}
        </p>
      </header>

      <main className="h-[calc(100vh-120px)]">
        <FlowVisualizer data={typebotData} />
      </main>
    </div>
  )
}
