import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "../ui/table";

export const ClientSkeleton = () => {
  return (
    <TableRow className="border-[#343434]">
      <TableCell className="hidden sm:table-cell">
        <Skeleton className="w-16 h-16 bg-dark-gray animate-pulse" />
      </TableCell>
      <TableCell className="md:table-cell">
        <Skeleton className="w-26 h-4 bg-dark-gray animate-pulse" />
      </TableCell>
      <TableCell className="md:table-cell">
        <Skeleton className="w-24 h-4 bg-dark-gray animate-pulse" />
      </TableCell>
      <TableCell className="md:table-cell">
        <Skeleton className="w-26 h-4 bg-dark-gray animate-pulse" />
      </TableCell>
      <TableCell className="md:table-cell ">
        <Skeleton className="w-26 h-4 bg-dark-gray animate-pulse" />
      </TableCell>
      <TableCell className="md:table-cell">
        <Skeleton className="w-8 h-4 bg-dark-gray animate-pulse" />
      </TableCell>
      <TableCell className="md:table-cell">
        <Skeleton className="w-8 h-4 bg-dark-gray animate-pulse" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-26 h-4 bg-dark-gray animate-pulse" />
      </TableCell>
    </TableRow>
  );
};
