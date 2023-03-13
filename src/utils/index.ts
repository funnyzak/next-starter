export const isDev = process.env.NODE_ENV === 'development'

export const isProd = process.env.NODE_ENV === 'production'

export const HOST_URL = isDev
  ? 'http://0.0.0.0:3000'
  : process.env.HOST_URL
