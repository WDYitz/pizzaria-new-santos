import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListFilter } from "lucide-react";

const Orders = () => {
  return (
    <main className="flex h-full w-full flex-col gap-4 bg-dark-gray p-4 text-white md:gap-8 md:p-8">
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

      <Card
        x-chunk="dashboard-06-chunk-0"
        className="border-0 bg-light-gray text-white"
      >
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-[#6c6c6c]">
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead className="md:table-cell">Horário</TableHead>
                <TableHead className="md:table-cell">Detalhes</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="min-h-full overflow-y-auto">
              <p>Mock</p>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-muted-foreground text-xs">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Orders;
