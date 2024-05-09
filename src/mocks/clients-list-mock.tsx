import { ClientSkeleton } from "@/components/client-skeleton";

const ClientsMock = () => {
  return (
    <>
      {Array.from({ length: 10 }).map(() => (
        <ClientSkeleton />
      ))}
    </>
  );
};

export default ClientsMock;
