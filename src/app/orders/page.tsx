import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import OrdersMock from "@/mocks/orders-list-mock";
import { ListFilter } from "lucide-react";

const Orders = () => {
  return (
    <main className="flex w-full flex-col gap-4 bg-dark-gray p-4 text-white md:h-[100vh] md:gap-8 md:p-8">
      <Search
        pageTitle="Pedidos"
        pageDescription="Visualização de todos os pedidos."
      />

      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="default"
                size="default"
                className="h-10 gap-2 bg-light-gray px-6 md:w-[100px] md:p-6"
              >
                <ListFilter className="h-5 w-5 " />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="border-[#343434] bg-light-gray text-white"
            >
              <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Status
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Valor</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Nome</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card className="h-[800px] overflow-y-auto border-0 bg-light-gray text-white">
        <CardContent className="pt-6">
          <OrdersMock />
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-xs">
        Showing <strong>1-10</strong> of <strong>32</strong> products
      </div>
    </main>
  );
};

export default Orders;
