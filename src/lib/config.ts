import config from 'config'
import { getCurrentEnvironment } from './environment'

const currentEnvironment = getCurrentEnvironment()

export const token: string = config[currentEnvironment].token
export const channels = config[currentEnvironment].channels
