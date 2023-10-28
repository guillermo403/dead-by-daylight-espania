import dotenv from 'dotenv'
import { type Environment } from './src/types'
dotenv.config()

type Config = Record<Environment, Record<string, string>>

const config: Config = {
  development: {
    token: process.env.TOKEN ?? ''
  },
  production: {
    token: process.env.TOKEN ?? ''
  }

}

export default config
