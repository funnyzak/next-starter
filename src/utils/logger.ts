import type { LoggerOptions } from 'pino'
import pino, { Logger } from 'pino'
import { LOGGER_LEVEL_DATA } from './constants'

const logLevels = new Map<string, string>(
  Object.entries(LOGGER_LEVEL_DATA)
)

export function getLogLevel(logger: string): string {
  return logLevels.get(logger) || logLevels.get('*') || 'info'
}

export function getLogger(name: string): Logger {
  const options: LoggerOptions = {
    name,
    level: getLogLevel(name),
    depthLimit: 5,
    timestamp: true,
    browser: {
      asObject: true,
    },
  }
  const _logger = pino(options)
  return _logger
}

export const logger = getLogger('app')
