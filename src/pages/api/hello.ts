// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { logger } from '@/utils'

export const config = {
  runtime: 'nodejs',
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  logger.info('Hello from Next.js API route')
  res
    .status(200)
    .json({ name: 'Hello', time: new Date().toISOString() })
}
