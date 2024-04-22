import { Hono } from "hono";
import prisma from "@/lib/prisma";
import { HTTPException } from "hono/http-exception";

const app = new Hono();

export const createNewClient = app.post('/new-client', async (res) => {
  const { name, phone, cpf, address, number, complement } = await res.req.json()

  const client = await prisma.clients.findFirst({
    where: {
      clientCPF: cpf,
      AND: {
        clientName: name
      }
    }
  })

  if (client?.clientCPF == cpf) {
    throw new HTTPException(400, { message: 'Desculpe, o cpf digitado já esta registrado' });
  }

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

  return res.json({ data: newClient, message: `Cliente registrado com sucesso!` });
})
