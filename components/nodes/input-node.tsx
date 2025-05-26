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
}

export default function InputNode({ data }: NodeProps<InputNodeData>) {
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
    <NodeWrapper accentColor="#10b981" icon={getIcon()} badge={data.inputType.toUpperCase()} className="min-w-[280px]">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex-1">
        <div className="text-white text-sm mb-2">{data.placeholder || "Enter text"}</div>

        {data.variableId && <div className="text-gray-400 text-xs">Saves to: {data.variableId}</div>}

        {data.description && <div className="text-gray-400 text-xs mt-1">{data.description}</div>}
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </NodeWrapper>
  )
}
