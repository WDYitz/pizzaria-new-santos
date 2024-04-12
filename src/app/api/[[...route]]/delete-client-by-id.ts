import { Hono } from "hono";
import prisma from "@/lib/prisma";

const app = new Hono();

export const deleteClientById = app.delete('/:id', async (res) => {
  const { id } = res.req.param();
  const deletedClient = await prisma.clients.delete({
    where: {
      id
    }
  })

  if (deletedClient.id !== id) {
    return res.json({
      message: "Esse cliente já foi deletado ou não existe!",
    })
  }

  return res.json({
    message: "Cliente deletado!",
  })
})

