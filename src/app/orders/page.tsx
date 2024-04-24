import { SearchProfileHeader } from "@/components/search-profile-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListFilter, MoreHorizontal } from "lucide-react";
import Image from "next/image";

const Orders = () => {
  return (
    <main className="h-full w-full flex flex-col gap-4 p-4 md:gap-8 md:p-8 bg-dark-gray text-white">
      <SearchProfileHeader
        hasSearchInput
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
                className="px-6 h-10 gap-2 bg-light-gray md:p-6 md:w-[100px]"
              >
                <ListFilter className="h-5 w-5 " />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-light-gray border-[#343434] text-white"
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
            <TableBody className="overflow-y-auto min-h-full">
              {Array.from({ length: 1 }).map((_, i) => {
                return (
                  <TableRow key={i} className="border-[#343434]">
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      Pizza quatro queijos
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-[#10b981] border-0 py-1 px-2"
                      >
                        Finalizado
                      </Badge>
                    </TableCell>
                    <TableCell>R$ 70</TableCell>
                    <TableCell className="md:table-cell">
                      20:30 04/04/2024
                    </TableCell>
                    <TableCell className="md:table-cell">
                      Pizza Queijo, sem molho de tomate e sem cebola
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                            className="hover:text-[#7f7f7f]"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="bg-light-gray text-white pointer border-[#343434]"
                        >
                          <DropdownMenuItem className="cursor-pointer hover:text-[#fff]">
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer hover:text-white">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Orders;
