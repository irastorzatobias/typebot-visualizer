"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { MessageSquare, Edit } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"
import { useState } from "react"

interface TextNodeData {
  label: string
  content: string
  description?: string
}

export default function TextNode({ id, data }: { id: string; data: any }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(data.content)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    // Here you would update the actual data
    console.log("Saving text:", editText, "for node:", id)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(data.content)
    setIsEditing(false)
  }

  return (
    <>
      <NodeWrapper ref={data.ref} accentColor="#3b82f6" icon={MessageSquare} badge="TEXT" className="w-[320px] max-w-[320px] bg-gray-900/60 rounded-none border-gray-700/80 shadow-none">
        <Handle type="target" position={Position.Left} className="w-3 h-3" />

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="text-white text-sm leading-relaxed break-words whitespace-pre-line">{data.content}</div>
          {data.description && <div className="text-gray-400 text-xs">{data.description}</div>}
        </div>

        <button onClick={handleEdit} className="p-1 hover:bg-gray-700 rounded transition-colors">
          <Edit size={14} className="text-gray-400" />
        </button>

        <Handle type="source" position={Position.Right} className="w-3 h-3" />
      </NodeWrapper>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 shadow-2xl max-w-lg w-full mx-4">
            <h3 className="text-white text-lg font-semibold mb-4">Edit Text Content</h3>
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full h-32 px-3 py-2 text-sm bg-gray-700 text-white border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your text content..."
              autoFocus
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
