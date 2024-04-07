import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const RecentOrders = () => {
  return (
    <Card className="xl:col-span-2 bg-light-gray text-white border-transparent">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Pedidos recentes</CardTitle>
          <CardDescription>Pedidos recentes de sua loja.</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            Ver todos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="xl:table-column">Status</TableHead>
              <TableHead className="xl:table-column">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* PREENCHER COM DADOS DOS BANCO  */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
