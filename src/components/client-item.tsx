import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";

export const ClientsRow = async ({ client }: any) => {
  return (
    <TableRow className="border-[#343434]">
      <TableCell className="hidden sm:table-cell">
        <Image fill className="" src={""} alt={""} />
      </TableCell>
      <TableCell className="font-medium">{client.clientName}</TableCell>
      <TableCell className="md:table-cell">{client.clientCPF}</TableCell>
      <TableCell className="md:table-cell">{client.clientPhone}</TableCell>
      <TableCell className="md:table-cell">{client.clientAddress}</TableCell>
      <TableCell className="md:table-cell">{client.clientNumber}</TableCell>
      <TableCell className="md:table-cell">{client.clientComplement}</TableCell>
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
};
