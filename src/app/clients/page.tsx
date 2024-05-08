"use client";
import { ClientsList } from "@/components/client-list";
import { OffCanvas } from "@/components/off-canva";
import { Search } from "@/components/search";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Customers = () => {
  return (
    <main className="flex h-full w-full flex-col gap-4 bg-dark-gray p-4 text-white md:gap-8 md:p-8">
      <Search
        pageTitle="Clientes"
        pageDescription="Visualização de todos os clientes."
      />

      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <OffCanvas openText="Adicionar cliente"/>
        </div>
      </div>

      <Card className="border-0 bg-light-gray text-white ">
        <CardContent>
          <ClientsList />
        </CardContent>
        <CardFooter>
          <div className="text-muted-foreground text-xs">
            Mostrando <strong>0</strong> de <strong>0</strong> clientes
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Customers;
