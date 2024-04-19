/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useClientActions } from "@/hooks/useClientActions";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ClientsRow } from "./rows";
import { ClientSkeleton } from "../skeleton/client-skeleton";
import { Suspense, useLayoutEffect } from "react";

export const ClientsTable = () => {
  const { clients, handleClients } = useClientActions();

  useLayoutEffect(() => {
    handleClients("api/clients");
  }, []);

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
        {clients.map((client) => (
          <Suspense key={client.id} fallback={<ClientSkeleton />}>
            <ClientsRow
              key={client.id}
              clientName={client.clientName}
              clientCPF={client.clientCPF}
              clientPhone={client.clientPhone}
              clientAddress={client.clientAddress}
              clientNumber={client.clientNumber}
              clientComplement={client.clientComplement}
            />
          </Suspense>
        ))}
      </TableBody>
    </Table>
  );
};
