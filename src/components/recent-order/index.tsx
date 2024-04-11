import { Badge } from "@/components/ui/badge";
import { TableRow, TableCell } from "../ui/table";

type OrderType = {
  name: string;
  phone: string;
  status: boolean;
  time: string;
  price: number;
};

export const Order = ({ name, phone, status, time, price }: OrderType) => {
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground md:inline">{phone}</div>
      </TableCell>
      <TableCell className="xl:table-column">
        <Badge
          className="text-xs border-emerald-400 bg-emerald-500 text-white"
          variant="outline"
        >
          {status}
        </Badge>
      </TableCell>
      <TableCell className="md:table-cell lg:hidden xl:table-column">
        {time}
      </TableCell>
      <TableCell className="text-right">{`R$ ${price}`}</TableCell>
    </TableRow>
  );
};
