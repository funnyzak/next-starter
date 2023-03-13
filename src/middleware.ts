import { API_CODE, ERROR_MSG } from './utils/type'
/* Description: Middleware for Next.js
 * more info: https://nextjs.org/docs/advanced-features/middleware
 */
import { env } from '@/env.mjs'
import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
} from 'next/server'
import { isDev } from './utils'

import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { LOG_TYPE } from '@/utils/type'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(env.RATE_LIMIT_COUNT, '1 d'),
  analytics: true,
})

export const config = {
  matcher: ['/api/:path*'],
}

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
): Promise<Response | undefined> {
  const ipIdentifier = request.ip ?? '127.0.0.1'

  const req_info = {
    type: LOG_TYPE.CONTROLLER_INFO,
    ip: ipIdentifier,
    method: request.method,
    url: request.url,
    msg: 'Received a new request',
  }
  console.log(JSON.stringify(req_info))

  if (isDev) {
    return NextResponse.next()
  }

  const { success, limit, reset, remaining, pending } =
    await ratelimit.limit(`ratelimit_middleware_${ipIdentifier}`)
  event.waitUntil(pending)

  console.log(
    `ipIdentifier: ${ipIdentifier}, success: ${success}, limit: ${limit}, reset: ${reset}, remaining: ${remaining}`
  )

  if (!success) {
    return runOutOfRatelimit(request)
  } else {
    const res = NextResponse.next()
    res.headers.set('X-RateLimit-Limit', limit.toString())
    res.headers.set('X-RateLimit-Remaining', remaining.toString())
    res.headers.set('X-RateLimit-Reset', reset.toString())
    return res
  }
}

function runOutOfRatelimit(req: NextRequest) {
  console.error('Account Limited')
  return new NextResponse(
    JSON.stringify({ success: false, message: 'rate limit' }),
    { status: 429, headers: { 'content-type': 'application/json' } }
  )
}

// function formatRes({
//   code = API_CODE.OK,
//   data,
//   message = ERROR_MSG.OK,
//   success = true,
// }: {
//   code?: number
//   data?: any
//   message?: string
//   success?: boolean
// }) {
//   return {
//     code: code || 0,
//     data: data,
//     message: message,
//     success: success,
//   }
// }
