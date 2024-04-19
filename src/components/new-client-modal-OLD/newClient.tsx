"use client";
import {
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChildrenType } from "@/types/ChildrenType";

export const NewClientModal = ({ children }: ChildrenType) => {
  return (
    <Dialog>
      {children}
      <DialogContent className="bg-drak-gray text-white">
        <DialogHeader>
          <DialogTitle>Novo Cliente</DialogTitle>
          <DialogDescription>
            Criar um cliente novo no sistema
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={() => {}} className="bg-dark-gray">
          <div className="grid grid-cols-4 items-center text-right gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input className="col-span-3" />
            <Label htmlFor="phone">Telefone</Label>
            <Input className="col-span-3" />
            <Label htmlFor="CPF">CPF</Label>
            <Input className="col-span-3" />
            <Label htmlFor="address">Endereço</Label>
            <Input className="col-span-3" />
            <Label htmlFor="address">Numero</Label>
            <Input className="col-span-3" />
            <Label htmlFor="address">Complemento</Label>
            <Input className="col-span-3" />
            <Label>Ja é Cliente?</Label>
            <RadioGroup className="flex">
              <RadioGroupItem value="Sim" id="yes" />
              <Label htmlFor="yes">Sim</Label>
              <RadioGroupItem value="Nao" id="no" />
              <Label htmlFor="no">Não</Label>
            </RadioGroup>
          </div>

          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>

            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
