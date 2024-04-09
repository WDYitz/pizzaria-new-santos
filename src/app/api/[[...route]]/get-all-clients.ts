import { Hono } from "hono";

const app = new Hono();

export const getAllClients = app.get('/', (res) => {
  return res.json({
    message: 'test'
  })
})

