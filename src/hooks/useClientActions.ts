"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { ClientDBSchemaType } from "@/types/ClientType";
import { useState } from "react";

export const useClientActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [clients, setClients] = useState<ClientDBSchemaType[]>([]);

  const handleClients = async (URL: string, body?: any, method?: string) => {
    if (!loading) {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/api${URL}`, {
          method,
          body: JSON.stringify(body)
        });
        const data = await res.json()

        switch (res.status) {
          case 200:
            setClients([...clients, ...data?.clients]);
            break;
          case 400:
            setError('Nenhum cliente foi encontrado');
            break;
          case 201:
            setError("Cliente criado com sucesso!");
            break;
          default:
            break;
        }

      } catch (e) {
        setError("Error" + e)
      }
      setLoading(false);
    }
  };

  return { loading, error, clients, handleClients };
};