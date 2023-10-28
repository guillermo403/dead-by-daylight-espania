type LogType = 'log' | 'error' | 'warn' | 'info'

function log (...args: string[]): void {
  writeLog(args.join(' '), 'log')
}

function error (...args: string[]): void {
  writeLog(args.join(' '), 'error')
}

function warn (...args: string[]): void {
  writeLog(args.join(' '), 'warn')
}

function info (...args: string[]): void {
  writeLog(args.join(' '), 'info')
}

function writeLog (text: string, logType: LogType): void {
  const d = new Date().toISOString()
  console.log(`[${d}] [${logType}] # ${text}`)
}

const logger = {
  log,
  error,
  warn,
  info
}

export default logger
