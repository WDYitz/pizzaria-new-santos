import { ClientSkeleton } from "@/components/client-skeleton";

const ClientsMocks = () => {
  return (
    <>
      {Array.from({ length: 10 }).map(() => (
        <ClientSkeleton />
      ))}
    </>
  );
};

export default ClientsMocks;
