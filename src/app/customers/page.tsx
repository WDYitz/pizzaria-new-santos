import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const Orders = () => {
  return (
    <main className="h-full w-full flex flex-col gap-4 p-4 md:gap-8 md:p-8 bg-dark-gray text-white">
      <SearchProfileHeader />

      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <Button
            size="default"
            className="h-9  gap-1 bg-light-gray sm:p-5 md:p-5"
          >
            <PlusCircle className="h-5 w-5 md:h-4 md:w-4" />
            <span className="sm:not-sr-only sm:whitespace-nowrap">
              Add Cliente
            </span>
          </Button>
        </div>
      </div>

      <Card
        x-chunk="dashboard-06-chunk-0"
        className="border-0 bg-light-gray text-white "
      >
        <CardHeader>
          <CardTitle>Clientes</CardTitle>
          <CardDescription>
            Visualização de todos os clientes do sistema.
          </CardDescription>
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

export default Orders;
