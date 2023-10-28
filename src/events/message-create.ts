import { Events, type Message, type GuildChannel } from 'discord.js'
import { type Event } from '@/types/event'
import logger from '@/lib/utils/logger'

export const event: Event = {
  name: Events.MessageCreate,
  once: false,

  execute: ([m, ..._args], _client) => {
    const message = m as Message
    const channel = message.channel as GuildChannel

    logger.info(`message: ${message.content} - channel: ${channel.name}`)
  }
}
