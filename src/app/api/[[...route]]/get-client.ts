import { Hono } from "hono";
import prisma from '@/lib/prisma'

const app = new Hono();

export const getClient = app.get('/:id', async (res) => {
  const { id } = res.req.param();

  const clientResult = await prisma.clients.findFirst({
    where: {
      id,
    }
  })

  if (!clientResult) {
    return res.json({
      message: "Cliente não existee",
    })
  }

  return res.json({
    data: clientResult,
  })
})
