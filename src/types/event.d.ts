import { type Client } from 'discord.js'

export interface Event {
  once?: boolean
  name: string
  execute: (args: any[], client: Client) => void
}
