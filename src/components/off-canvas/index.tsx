"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useClientActions } from "@/hooks/useClientActions";
import { useState } from "react";

export const OffCanvas = ({ openText }: { openText: string }) => {
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  const { loading, handleClients } = useClientActions();

  const handleCreateNewClient = () => {
    if (
      name !== "" &&
      CPF !== "" &&
      phone !== "" &&
      address !== "" &&
      number !== "" &&
      complement !== ""
    ) {
      handleClients(
        "/api/clients",
        {
          name,
          CPF,
          phone,
          address,
          number,
          complement,
        },
        "POST"
      );
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{openText}</Button>
      </SheetTrigger>
      <SheetContent className="text-white border-0 min-w-[500px]">
        <SheetHeader>
          <SheetTitle className="text-white">Criar cliente</SheetTitle>
          <SheetDescription>Criar novo cliente no sistema.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="items-center gap-4 flex flex-col">
            <Label htmlFor="name" className=" w-full">
              Nome
            </Label>
            <Input
              id="name"
              className="col-span-3 text-slate-600"
              onChange={(e: any) => setName(e.value)}
              value={name}
            />
          </div>
          <div className="items-center gap-4 flex flex-col">
            <Label htmlFor="cpf" className=" w-full">
              CPF
            </Label>
            <Input
              id="cpf"
              className="col-span-3 text-slate-600"
              onChange={(e: any) => setCPF(e.value)}
              value={CPF}
            />
          </div>
          <div className="items-center gap-4 flex flex-col">
            <Label htmlFor="phone" className=" w-full">
              Telefone
            </Label>
            <Input
              id="phone"
              className="col-span-3 text-slate-600"
              onChange={(e: any) => setPhone(e.value)}
              value={phone}
            />
          </div>
          <div className="items-center gap-4 flex flex-col">
            <Label htmlFor="address" className=" w-full">
              Endereço
            </Label>
            <Input
              id="address"
              className="col-span-3 text-slate-600"
              onChange={(e: any) => setAddress(e.value)}
              value={address}
            />
          </div>
          <div className="items-center gap-4 flex flex-col">
            <Label htmlFor="number" className=" w-full">
              Número
            </Label>
            <Input
              id="number"
              className="col-span-3 text-slate-600"
              onChange={(e: any) => setNumber(e.value)}
              value={number}
            />
          </div>
        </div>
        <div className="items-center gap-4 flex flex-col">
          <Label htmlFor="complemento" className=" w-full">
            Complemento
          </Label>
          <Input
            id="complemento"
            className="col-span-3 text-slate-600"
            onChange={(e: any) => setComplement(e.value)}
            value={complement}
          />
        </div>
        <SheetFooter>
          <SheetClose asChild className="p-2">
            <Button
              type="submit"
              variant="indigo"
              className="text-white items-end px-6 py-2 mt-8 bg-[#4f46e5]"
              onClick={handleCreateNewClient}
            >
              Salvar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
