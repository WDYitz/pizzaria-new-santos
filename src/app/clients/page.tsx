import { ClientsList } from "@/components/client-list";
import { Search } from "@/components/search";
import { Card, CardContent } from "@/components/ui/card";

const Customers = () => {
  return (
    <main className="flex min-h-full w-full flex-col gap-4 bg-dark-gray p-4 text-white md:gap-8 md:p-8">
      <Search
        pageTitle="Clientes"
        pageDescription="Visualização de todos os clientes."
      />

      <Card className="w-[600px] max-w-full h-[800px] overflow-y-auto border-0 bg-light-gray text-white">
        <CardContent className="space-y-2 pt-4">
          <ClientsList />
        </CardContent>
      </Card>
    </main>
  );
};

export default Customers;
