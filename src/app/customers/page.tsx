'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchProfileHeader } from "@/components/search-profile-header";
import { ClientsTable } from "@/components/clients-table/table";
import { OffCanvas } from "@/components/off-canvas";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { revalidateTag } from "next/cache";

const Customers = () => {
  const handleRevalidateClients = () => {
    revalidateTag("clients");
  };

  return (
    <main className="h-full w-full flex flex-col gap-4 p-4 md:gap-8 md:p-8 bg-dark-gray text-white">
      <SearchProfileHeader />

      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <OffCanvas openText="Adicionar cliente" />
        </div>
      </div>

      <Card
        x-chunk="dashboard-06-chunk-0"
        className="border-0 bg-light-gray text-white "
      >
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>Clientes</CardTitle>
            <CardDescription className="pt-2">
              <p>Visualização de todos os clientes do sistema.</p>
            </CardDescription>
          </div>
          <Button
            variant="default"
            className="gap-2"
            onClick={() => handleRevalidateClients}
          >
            <p>Reload</p>
            <RotateCw className="focus:animate-spin" />
          </Button>
        </CardHeader>
        <CardContent>
          <ClientsTable />
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Mostrando <strong>1-10</strong> de <strong>32</strong> clientes
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Customers;
