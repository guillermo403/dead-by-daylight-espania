import { Events, type GuildChannel, type Message } from 'discord.js'
import { type Event } from '@/types/event'
import { checkChannels } from '@/lib/check-channels'

export const event: Event = {
  name: Events.MessageCreate,
  once: false,

  execute: ([m, ..._args], _client) => {
    const message = m as Message
    const channel = message.channel as GuildChannel

    const validChannel = checkChannels(channel)

    if (validChannel === undefined) return

    validChannel.action()
  }
}
