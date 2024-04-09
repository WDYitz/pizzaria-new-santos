import { Hono } from "hono";

const app = new Hono();

export const getClient = app.get('/:client', (res) => {
  const { client } = res.req.param();
  return res.json({
    client_number: ` ${client}`,
  })

})
