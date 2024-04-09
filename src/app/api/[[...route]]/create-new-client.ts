import { Hono } from "hono";
import prisma from "@/lib/prisma";

const app = new Hono();

export const createNewClient = app.post('/new-client', async (res) => {
  const { name, phone, cpf, address, number, complement } = await res.req.json()

  await prisma.client.create({
    data: {
      clientName: name,
      clientPhone: phone,
      clientCPF: cpf,
      clientAddress: address,
      clientNumber: number,
      clientComplement: complement
    }
  })
  return res.json({ message: `client ${name} created with success` })
})
