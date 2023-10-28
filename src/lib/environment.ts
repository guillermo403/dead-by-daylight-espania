import { type Environment } from '@/types'

const environments: Record<string, Environment> = {
  production: 'production',
  development: 'development',
  default: 'development'
}

export const getCurrentEnvironment = (): Environment => {
  let currentEnv = process.env.NODE_ENV ?? environments.default

  if (environments[currentEnv] === undefined) currentEnv = environments.default
  return environments[currentEnv] ?? environments.default
}
