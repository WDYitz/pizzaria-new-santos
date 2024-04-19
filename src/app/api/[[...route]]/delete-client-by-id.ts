import { Hono } from "hono";
import prisma from "@/lib/prisma";
import { HTTPException } from 'hono/http-exception'

const app = new Hono();

export const deleteClientById = app.delete('/:id', async (res) => {
  const { id } = res.req.param();

  const client = await prisma.clients.findFirst({
    where: {
      id
    }
  })

  if (client?.id !== id) {
    throw new HTTPException(400, { message: 'Esse cliente já foi deletado ou não existe!' })
  }

  const deletedClient = await prisma.clients.delete({
    where: {
      id
    }
  })

  if (deletedClient) {
    return res.json({
      message: "Cliente deletado!",
    })
  }
})

