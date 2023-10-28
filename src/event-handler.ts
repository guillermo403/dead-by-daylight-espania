import { type Client } from 'discord.js'
import fs from 'node:fs'
import { join } from 'node:path'
import { type Event } from './types/event'
import logger from './lib/utils/logger'

export const start = async (client: Client): Promise<number> => {
  const eventsPath = join(__dirname, 'events')
  const eventFiles = fs.readdirSync(eventsPath)
  let eventsLoaded = 0

  for await (const file of eventFiles) {
    const filePath = join(eventsPath, file)

    await import(filePath)
      .then(({ event }: { event: Event }) => {
        event.once !== undefined && event.once !== null && event.once
          ? client.once(event.name, (...args) => { event.execute([...args], client) })
          : client.on(event.name, (...args) => { event.execute([...args], client) })
        logger.info(`Loaded event ${event.name}`)
        ++eventsLoaded
      })
      .catch((err) => {
        logger.error(err)
        process.exit(1)
      })
  }

  return await Promise.resolve(eventsLoaded)
}
