"use client"
import FlowVisualizer from "@/components/flow-visualizer"
import { typebotData } from "@/lib/sample-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="border-b border-gray-800 p-4">
        <h1 className="text-2xl font-bold text-white text-center">{typebotData.typebot.name}</h1>
      </header>

      <main className="h-[calc(100vh-120px)]">
        <FlowVisualizer data={typebotData} />
      </main>
    </div>
  )
}
