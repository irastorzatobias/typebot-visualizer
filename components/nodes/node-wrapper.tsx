"use client"

import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import React from "react"

interface NodeWrapperProps {
  children: ReactNode
  accentColor: string
  icon: LucideIcon
  badge: string
  className?: string
}

export const NodeWrapper = React.forwardRef<HTMLDivElement, NodeWrapperProps>(
  ({ children, accentColor, icon: Icon, badge, className = "" }, ref) => {
    return (
      <div ref={ref} className={`bg-gray-800 border-2 rounded-lg p-3 shadow-lg ${className}`} style={{ borderColor: accentColor }}>
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="p-2 rounded" style={{ backgroundColor: `${accentColor}20` }}>
            <Icon size={16} style={{ color: accentColor }} />
          </div>

          {/* Badge */}
          <div className="absolute top-1 right-1">
            <div
              className="text-xs font-medium px-2 py-1 rounded"
              style={{
                backgroundColor: `${accentColor}20`,
                color: accentColor,
              }}
            >
              {badge}
            </div>
          </div>

          {/* Content */}
          {children}
        </div>
      </div>
    )
  }
)

NodeWrapper.displayName = "NodeWrapper"
