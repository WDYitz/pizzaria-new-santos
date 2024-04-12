import { Hono } from "hono";
import prisma from "@/lib/prisma";

const app = new Hono();

export const getAllClients = app.get(async (res) => {
  const clientsResult = await prisma.clients.findMany({
    select: {
      id: true,
      clientName: true,
      clientCPF: true,
      clientPhone: true,
      clientAddress: true,
      clientNumber: true,
      clientComplement: true,
    }
  })

  if (clientsResult !== null) {
    return res.json({
      clients: clientsResult
    })
  }

  return res.json({ message: 'Nenhum cliente foi encontrado' })

})

