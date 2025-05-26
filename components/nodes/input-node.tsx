"use client"

import { Handle, Position, type NodeProps } from "@xyflow/react"
import { Type, Mail, Phone, Hash } from "lucide-react"
import { NodeWrapper } from "./node-wrapper"

interface InputNodeData {
  label: string
  inputType: string
  placeholder?: string
  variableId?: string
  description?: string
  ref?: React.RefObject<HTMLDivElement>
}

export default function InputNode({ id, data }: { id: string; data: InputNodeData }) {
  const getIcon = () => {
    switch (data.inputType) {
      case "email input":
        return Mail
      case "phone input":
        return Phone
      case "number input":
        return Hash
      default:
        return Type
    }
  }

  return (
    <NodeWrapper ref={data.ref} accentColor="#10b981" icon={getIcon()} badge={data.inputType.toUpperCase()} className="w-[320px] max-w-[320px] bg-gray-900/60 rounded-none border-gray-700/80 shadow-none">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1 flex flex-col">
        <div className="text-white text-sm break-words whitespace-pre-line">{data.placeholder || "Enter text"}</div>

        {data.variableId && <div className="text-gray-400 text-xs">Saves to: {data.variableId}</div>}

        {data.description && <div className="text-gray-400 text-xs">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
