import { db } from "@/lib/prisma";
import { Suspense } from "react";
import { ClientItem } from "./client-item";
import { ClientSkeleton } from "./client-skeleton";

export const ClientsList = async () => {
  const clients = await db.user.findMany({
    select: {
      name: true,
      email: true,
      image: true,
    },
  });
  return (
    <>
      {clients.map((client) => (
        <Suspense fallback={<ClientSkeleton />}>
          <ClientItem client={client} />
        </Suspense>
      ))}
    </>
  );
};
