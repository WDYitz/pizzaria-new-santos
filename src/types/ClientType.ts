
type ClientType = {
  id?: string;
  clientName: string;
  clientCPF: string;
  clientPhone: string;
  clientAddress: string;
  clientNumber: string;
  clientComplement: string;
  clientProfileImage: number;
}

export type ClientsTypeSchema = {
  clients: ClientType
}



