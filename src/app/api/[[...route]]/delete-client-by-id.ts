import { Hono } from "hono";

const app = new Hono();

export const getAllClients = app.get('/:id', (res) => {
  const { id } = res.req.param();
  return res.json({ message: id })
})

