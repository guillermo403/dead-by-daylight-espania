import { Client, GatewayIntentBits } from 'discord.js'
import { token } from './lib/config'
import * as eventHandler from './event-handler'
import { getCurrentEnvironment } from './lib/environment'
import logger from './lib/utils/logger'

export function init (): void {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

  const currentEnvironment = getCurrentEnvironment()

  logger.info(`Starting on ${currentEnvironment} mode`)

  eventHandler.start(client)
    .then((loadedEvents) => {
      logger.info(`${loadedEvents} events loaded`)
    })
    .catch((err) => {
      logger.error(err)
      process.exit(1)
    })

  client.login(token)
    .catch((err) => {
      logger.error(err)
      process.exit(1)
    })
}
