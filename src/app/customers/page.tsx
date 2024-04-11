import Image from "next/image";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { SearchProfileHeader } from "@/components/search-profile-header";

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
        className="border-0 bg-light-gray text-white grow"
      >
        <CardHeader>
          <CardTitle>Clientes</CardTitle>
          <CardDescription>
            Visualização de todos os clientes do sistema.
          </CardDescription>
        </CardHeader>
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
                    <TableCell className="hidden lg:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      Laser Lemonade Machine
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Draft</Badge>
                    </TableCell>
                    <TableCell>R$ 70</TableCell>
                    <TableCell className=" md:table-cell">
                      20:30 04/04/2024
                    </TableCell>
                    <TableCell className=" md:table-cell">
                      Pizza Queijo
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
            Mostrando <strong>1-10</strong> de <strong>32</strong> clientes
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Orders;
