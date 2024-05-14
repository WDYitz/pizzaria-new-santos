import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Prisma } from "@prisma/client";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { TableCell } from "./ui/table";

type ClientItemProps = {
  client: Prisma.UserGetPayload<{
    select: {
      name: true;
      email: true;
      image: true;
    };
  }>;
};

export const ClientItem = ({ client }: ClientItemProps) => {
  return (
    <div className="flex justify-between border-[#343434]">
      <div className="rounded-sm sm:table-cell">
        <Image
          width={60}
          height={60}
          className="h-10 w-10 rounded-full"
          src={client.image}
          alt={client.name && client.name}
        />
      </div>
      <div className="flex flex-col items-start justify-center text-left">
        <TableCell className="hidden text-left font-medium">
          {client.name}
        </TableCell>
        <TableCell className="text-left md:table-cell">
          {client.email}
        </TableCell>
      </div>
      <div>
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
            className="pointer border-[#343434] bg-light-gray text-white"
          >
            <DropdownMenuItem className="cursor-pointer hover:text-[#fff]">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-white">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
