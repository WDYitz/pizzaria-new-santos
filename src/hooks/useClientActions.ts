"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { ClientType } from "@/types/ClientType";
import axios from "axios";
import { useEffect, useState } from "react";

export const useClientActions = (URL?: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [clients, setClients] = useState<ClientType[]>([]);

  const handleGetAllUsers = async () => {
    if (!loading) {
      setLoading(true);
      const json = await axios.get(`http://localhost:3000/${URL}`);

      if (json.status === 200) {
        setClients([...clients, ...json?.data?.clients]);
      }

      if (json.status === 404) {
        setError('Nenhum cliente foi encontrado')
      }

      setError("Erro na chamada API")
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllUsers()
  }, [URL])

  /*   const handlePostUser = async (name: string, email: string) => {
      await axios.post(URL, {
        name, email
      });
    };
  
    const handleDeleteUser = async (id: number) => {
      await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
    }; */

  return { loading, error, clients };
};