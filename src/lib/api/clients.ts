/* eslint-disable import/no-anonymous-default-export */
import prisma from "../prisma";

export default {
  createNewClient: async (name: string, cpf: string, phone: string, address: string, number: string, complement: string) => {
    const client = await prisma.client.create({
      data: {
        clientName: name,
        clientCPF: cpf,
        clientPhone: phone,
        clientAddress: address,
        clientNumber: number,
        clientComplement: complement,
      }
    });

    return client;
  },
  getAllClients: async () => {
    const clients = await prisma.client.findMany({
      select: {
        id: true,
        clientName: true,
        clientPhone: true,
        clientCPF: true,
        clientAddress: true,
        clientNumber: true,
        clientComplement: true
      }
    });

    return clients
  },
  getClientById: async (id: string) => {
    const client = await prisma.client.findUnique({
      where: {
        id,
      }
    })

    return client
  },
  deleteClientById: async (id: string) => {
    return await prisma.client.delete({
      where: {
        id,
      }
    })
  }
}