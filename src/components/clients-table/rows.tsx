"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { ClientDBSchemaType } from "@/types/ClientType";
import Avatar1 from "@/assets/images/avatar.jpg";

export const ClientsRow = async ({
  clientName,
  clientCPF,
  clientPhone,
  clientAddress,
  clientNumber,
  clientComplement,
}: ClientDBSchemaType) => {
  return (
    <TableRow className="border-[#343434]">
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={Avatar1}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{clientName}</TableCell>
      <TableCell className="md:table-cell">{clientCPF}</TableCell>
      <TableCell className="md:table-cell">{clientPhone}</TableCell>
      <TableCell className="md:table-cell">{clientAddress}</TableCell>
      <TableCell className="md:table-cell">{clientNumber}</TableCell>
      <TableCell className="md:table-cell">{clientComplement}</TableCell>
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
