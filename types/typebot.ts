export interface TypebotData {
  typebot: {
    id: string
    name: string
    version: string
    events: Array<{
      id: string
      outgoingEdgeId?: string
      graphCoordinates: { x: number; y: number }
      type: string
    }>
    groups: Array<{
      id: string
      title: string
      graphCoordinates: { x: number; y: number }
      blocks: Array<{
        id: string
        outgoingEdgeId?: string
        type: string
        content?: any
        items?: any[]
        options?: any
      }>
    }>
    edges: Array<{
      id: string
      from: {
        eventId?: string
        blockId?: string
        itemId?: string
      }
      to: {
        groupId?: string
        blockId?: string
      }
    }>
  }
}
