import { Hono } from "hono";
import prisma from "@/lib/prisma";

const app = new Hono();

export const createNewClient = app.post('/new-client', async (res) => {
  const { name, phone, cpf, address, number, complement } = await res.req.json()

  const client = await prisma.clients.findFirst({
    where: {
      clientCPF: cpf
    }
  })

  const newClient = await prisma.clients.create({
    data: {
      clientName: name,
      clientPhone: phone,
      clientCPF: cpf,
      clientAddress: address,
      clientNumber: number,
      clientComplement: complement
    }
  })

  if (client?.clientCPF == cpf) {
    return res.json({ message: `Desculpe, o cpf digitado já esta registrado` })
  }

  console.log({ data: newClient, message: `Cliente registrado com sucesso` })
  return res.json({ data: newClient, message: `Cliente registrado com sucesso` })
})
