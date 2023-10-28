export interface Channel {
  name: string
  action: () => void
  parent_id: string | null
}
export type Channels = Record<Environment, Record<string, Channel>>
