import { ClientsTypeSchema } from '@/types/ClientType';
import axios from 'axios';

const req = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getAllClients = async (): Promise<ClientsTypeSchema[]> => {
  const res = await req.get('/clients');
  return res.data.clients
}