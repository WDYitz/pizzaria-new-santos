import { useQuery } from "@tanstack/react-query";
import { getAllClients } from "./api-actions";

export const useAllClients = () => {
  const query = useQuery({
    queryKey: ["clients"],
    queryFn: getAllClients,
  });
  return query;
}