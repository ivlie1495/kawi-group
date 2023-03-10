import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@utils/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req

  switch(method) {
    case 'POST':
      const { name } = body
      const company = await prisma.company.create({
        data: {
          name
        }
      })
      res.status(201).json(company)

      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}