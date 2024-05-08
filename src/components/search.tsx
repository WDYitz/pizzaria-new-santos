import { Search as SearchIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

type SearchProps = {
  pageTitle?: string;
  pageDescription?: string;
};

export const Search = ({ pageTitle, pageDescription }: SearchProps) => {
  return (
    <div className="sm:bg-transparent mr-2 flex w-full flex-col justify-between gap-4 sm:static sm:h-auto sm:flex-row sm:border-0 ">
      <div>
        <h2 className="text-[24px]">{pageTitle}</h2>
        <h3 className="text-slate-400">{pageDescription}</h3>
      </div>
      <div className="flex gap-4">
        {/* Search input area */}
        <div className="relative ml-auto w-full flex-1 md:grow-0">
          <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-white" />
          <Input
            type="search"
            placeholder="Search..."
            className="rounded-lg border-0 bg-[#1e1e1e] pl-8 md:w-[250px] lg:w-[370px]"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Image
                src={""}
                width="50"
                height="50"
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="border-0 bg-light-gray p-4 text-white shadow-md"
          >
            <DropdownMenuItem className="hover:bg-slate-300">
              Configurações
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
