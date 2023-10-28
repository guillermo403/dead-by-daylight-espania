import { Events } from 'discord.js'
import { type Event } from '../types/event'
import logger from '../lib/utils/logger'

export const event: Event = {
  once: true,
  name: Events.ClientReady,

  execute: (_args, client) => {
    logger.info(`Logged in as ${client.user?.tag}!`)
  }

}
