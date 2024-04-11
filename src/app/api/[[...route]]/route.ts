import { Hono } from "hono";
import { handle } from "hono/vercel";
import type { PageConfig } from "next";

//* ENDPOINTS CLIENTS
import { getAllClients } from './get-all-clients'
import { getClient } from './get-client'
import { createNewClient } from "./create-new-client";
import { deleteClientById } from "./delete-client-by-id";
//* ENDPOINTS ORDERS


export const runtime: PageConfig = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.route('/clients', createNewClient)
app.route('/clients', getAllClients)
app.route('/clients', getClient)
app.route('/clients', deleteClientById)

export const GET = handle(app)
export const POST = handle(app)
export const DELETE = handle(app)




