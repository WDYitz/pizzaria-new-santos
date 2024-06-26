"use client";
import Avatar1 from "@/assets/images/avatar-1.jpg";
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

export const ClientsRow = async ({ clients }: any) => {
  return (
    <TableRow className="border-[#343434]">
      <TableCell className="hidden sm:table-cell">
        {clients.clientProfileImage == 1 ? (
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src={Avatar1}
            width="64"
          />
        ) : clients.clientProfileImage == 2 ? (
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src={Avatar1}
            width="64"
          />
        ) : (
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src={Avatar1}
            width="64"
          />
        )}
      </TableCell>
      <TableCell className="font-medium">{clients.clientName}</TableCell>
      <TableCell className="md:table-cell">{clients.clientCPF}</TableCell>
      <TableCell className="md:table-cell">{clients.clientPhone}</TableCell>
      <TableCell className="md:table-cell">{clients.clientAddress}</TableCell>
      <TableCell className="md:table-cell">{clients.clientNumber}</TableCell>
      <TableCell className="md:table-cell">
        {clients.clientComplement}
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
};
