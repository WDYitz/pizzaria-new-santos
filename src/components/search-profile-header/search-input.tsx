import { Search } from "lucide-react";
import { Input } from "../ui/input";

export const SearchInput = () => {
  return (
    <div className="relative w-full ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-3 h-4 w-4 text-white" />
      <Input
        type="search"
        placeholder="Search..."
        className="rounded-lg bg-[#1e1e1e] pl-8 md:w-[250px] lg:w-[370px] border-0"
      />
    </div>
  );
};
