import { type Channel } from '@/types/channel'
import { getCategories, getChannels } from './channels'
import { type GuildChannel } from 'discord.js'

export const checkChannels = (channel: GuildChannel): Channel | undefined => {
  const channelParent = channel.parent

  const validChannels = getChannels()
  const validCategories = getCategories()

  const isValidCategory = validCategories.has(channelParent?.id ?? '')
  const isValidChannel = validChannels.has(channel.id)
  if (!isValidCategory && !isValidChannel) return

  if (isValidChannel) return validChannels.get(channel.id) as Channel
  if (isValidCategory) return validCategories.get(channelParent?.id ?? '') as Channel

  return undefined
}
