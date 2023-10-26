import { Client, GatewayIntentBits } from 'discord.js'
import { token } from './lib/config'
import * as eventHandler from './event-handler'

export function init (): void {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

  eventHandler.start(client)
    .then((loadedEvents) => {
      console.log(`${loadedEvents} events loaded`)
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })

  client.login(token)
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
