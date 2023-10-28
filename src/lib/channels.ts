import { type Environment } from '@/types'
import { type Channels } from '@/types/channel'
import { getCurrentEnvironment } from '@/lib/environment'

let env: Environment = 'development'
const validChannels = new Map()
const validCategories = new Map()

const channels: Channels = {
  development: {
    '1167729066233827399': {
      name: '18',
      action: () => { console.log('Canal +18') },
      parent_id: null
    },
    '': {
      name: 'Tickets +18',
      action: () => { console.log('Categoria +18') },
      parent_id: '1167764090735841380'
    }
  },

  production: {
    '': {
      name: '------>[📩TICKETS +18📩]<------',
      action: () => { console.log('Categoria +18') },
      parent_id: '863075899800027177'
    }
  }
}

export const initChannelsAndCategories = async (): Promise<void> => {
  env = getCurrentEnvironment()

  initCategories()
  initChannels()

  void Promise.resolve()
}

const initCategories = (): void => {
  for (const [key, value] of Object.entries(channels[env])) {
    if (key === '') {
      const id = value.parent_id
      value.parent_id = null
      validCategories.set(id, value)
    }
  }
}

const initChannels = (): void => {
  for (const [key, value] of Object.entries(channels[env])) {
    if (key !== '') {
      const channel = { ...value }
      validChannels.set(key, channel)
    }
  }
}

export const getCategories = (): Map<string, unknown> => validCategories
export const getChannels = (): Map<string, unknown> => validChannels
