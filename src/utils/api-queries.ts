import { ClientsTypeSchema } from "@/types/ClientType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNewClient, getAllClients } from "./api-actions";

export const useAllClients = () => {
  const query = useQuery({
    queryKey: ["clients"],
    queryFn: getAllClients,
  });
  return query;
}

export const useCreateClient = async (newData: ClientsTypeSchema) => {
  const queryClient = useQueryClient()
  const { mutateAsync: createNewClientFn } = useMutation({
    mutationFn: createNewClient,
    onSuccess(data, variables, context) {
      const cached = queryClient.getQueryData(['clients'])

      queryClient.setQueryData(['clients'], (data: any) => {
        return [...data, newData]
      })
    }
  })

  try {
    await createNewClientFn(data)

  } catch (error) {
    console.log('error')
  }

}