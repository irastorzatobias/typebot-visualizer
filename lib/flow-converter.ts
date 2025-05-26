import type { Node, Edge } from "@xyflow/react"
import type { TypebotData } from "@/types/typebot"
import { MarkerType } from "@xyflow/react"

export function convertTypebotToFlow(data: TypebotData): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []
  const edges: Edge[] = []

  // Convert events to start nodes
  data.typebot.events.forEach((event) => {
    nodes.push({
      id: event.id,
      type: "startNode",
      position: { x: event.graphCoordinates.x, y: event.graphCoordinates.y },
      data: {
        label: "Flow Start",
        description: data.typebot.name,
      },
      draggable: false,
    })
  })

  // Convert groups and blocks
  data.typebot.groups.forEach((group) => {
    // Add group container with original position
    const groupHeight = Math.max(200, group.blocks.length * 140 + 100)

    nodes.push({
      id: group.id,
      type: "groupNode",
      position: { x: group.graphCoordinates.x, y: group.graphCoordinates.y },
      data: {
        label: group.title || "Untitled Group",
        blockCount: group.blocks.length,
      },
      style: {
        width: 400,
        height: groupHeight,
        zIndex: -1,
      },
      draggable: false,
    })

    // Add blocks within groups with proper spacing - NO PARENT RELATIONSHIP
    group.blocks.forEach((block, index) => {
      const blockData = convertBlockToNodeData(block)

      nodes.push({
        id: block.id,
        type: blockData.type,
        position: {
          x: group.graphCoordinates.x + 20,
          y: group.graphCoordinates.y + 60 + index * 140,
        },
        data: blockData.data,
        draggable: false,
        // Remove parentNode to fix edge rendering
      })
    })
  })

  // Create a map for quick lookups and comprehensive edge validation
  const groupToFirstBlock = new Map<string, string>()
  const allNodeIds = new Set<string>()

  // Map all node IDs
  nodes.forEach((node) => allNodeIds.add(node.id))

  // Map groups to their first blocks
  data.typebot.groups.forEach((group) => {
    if (group.blocks.length > 0) {
      groupToFirstBlock.set(group.id, group.blocks[0].id)
    }
  })

  // Convert edges with proper source/target resolution and validation
  data.typebot.edges.forEach((edge) => {
    let sourceId = edge.from.eventId || edge.from.blockId
    let sourceHandle: string | undefined = undefined
    let targetId = edge.to.blockId

    // If the edge comes from a choice input item, set the handle id
    if (edge.from.blockId && edge.from.itemId) {
      // Find the group and block
      const group = data.typebot.groups.find((g) => g.blocks.some((b) => b.id === edge.from.blockId))
      const block = group?.blocks.find((b) => b.id === edge.from.blockId)
      if (block && block.items) {
        const idx = block.items.findIndex((item: any) => item.id === edge.from.itemId)
        if (idx !== -1) {
          sourceHandle = `choice-${idx}`
        }
      }
    }

    // If target is a group, connect to the first block in that group
    if (edge.to.groupId && !targetId) {
      targetId = groupToFirstBlock.get(edge.to.groupId)
    }

    // Only create edge if both source and target exist in our nodes
    if (sourceId && targetId && allNodeIds.has(sourceId) && allNodeIds.has(targetId)) {
      edges.push({
        id: edge.id,
        source: sourceId,
        sourceHandle,
        target: targetId,
        type: "default",
        animated: false,
        style: {
          stroke: "#6b7280",
          strokeWidth: 2,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#6b7280",
          width: 20,
          height: 20,
        },
      })
    } else {
      console.warn(`Skipping edge ${edge.id}: source=${sourceId}, target=${targetId}`)
    }
  })

  console.log("Generated nodes:", nodes.length)
  console.log("Generated edges:", edges.length)
  console.log("Edges:", edges)

  return { nodes, edges }
}

function convertBlockToNodeData(block: any) {
  switch (block.type) {
    case "text":
      return {
        type: "textNode",
        data: {
          label: "Text Message",
          content: extractTextContent(block.content),
          description: "Message to user",
        },
      }

    case "choice input":
      return {
        type: "choiceNode",
        data: {
          label: "Choice Input",
          choices: block.items?.map((item: any) => item.content) || [],
          description: "Multiple choice question",
        },
      }

    case "text input":
    case "email input":
    case "phone input":
    case "number input":
      return {
        type: "inputNode",
        data: {
          label: "User Input",
          inputType: block.type,
          placeholder: block.options?.labels?.placeholder || "Enter text",
          variableId: block.options?.variableId,
          description: "User input field",
        },
      }

    case "Set variable":
      return {
        type: "variableNode",
        data: {
          label: "Set Variable",
          variableId: block.options?.variableId || "Unknown",
          expression: block.options?.expressionToEvaluate || "No expression",
          description: "Variable assignment",
        },
      }

    case "Jump":
      return {
        type: "jumpNode",
        data: {
          label: "Jump",
          targetGroup: block.options?.groupId,
          targetBlock: block.options?.blockId,
          description: "Flow control",
        },
      }

    case "dify-ai":
      return {
        type: "aiNode",
        data: {
          label: "AI Block",
          action: block.options?.action || "AI Action",
          query: block.options?.query || "No query",
          description: "AI processing",
        },
      }

    default:
      return {
        type: "textNode",
        data: {
          label: block.type,
          content: `${block.type} block`,
          description: "Custom block type",
        },
      }
  }
}

function extractTextContent(content: any): string {
  if (!content?.richText) return "Empty message"

  return (
    content.richText.map((rt: any) => rt.children?.map((child: any) => child.text).join("") || "").join(" ") ||
    "Empty message"
  )
}
