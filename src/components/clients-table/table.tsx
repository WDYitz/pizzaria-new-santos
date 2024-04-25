/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAllClients } from "@/utils/api-queries";
import { Suspense } from "react";
import { ClientSkeleton } from "../skeleton/client-skeleton";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ClientsRow } from "./rows";

export const ClientsTable = () => {
  // Get all clients registered
  const query = useAllClients();

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-[#6c6c6c]">
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>CPF</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead className="md:table-cell">Endereço</TableHead>
          <TableHead className="md:table-cell">Número</TableHead>
          <TableHead className="md:table-cell">Complemento</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="overflow-y-auto min-h-full">
        {query?.data?.map((client: any) => (
          <Suspense key={client.id} fallback={<ClientSkeleton />}>
            <ClientsRow key={client.id} clients={client} />
          </Suspense>
        ))}
      </TableBody>
    </Table>
  );
};
