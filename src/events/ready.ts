import { Events } from 'discord.js'
import { type Event } from '../types/event'

export const event: Event = {
  once: true,
  name: Events.ClientReady,

  execute: (_args, client) => {
    console.log(`Logged in as ${client.user?.tag}!`)
  }

}
