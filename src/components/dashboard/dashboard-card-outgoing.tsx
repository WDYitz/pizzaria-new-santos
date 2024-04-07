import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export const DashboardOutgoingCard = ({
  title,
  outgoing,
  porcent = 0,
}: {
  title: string;
  outgoing: number;
  porcent: number;
}) => {
  return (
    <Card className="bg-light-gray text-white border-transparent">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <CreditCard className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{`- R$ ${outgoing}`}</div>
        <p className="text-xs text-muted-foreground">{`${porcent}% do mês passado`}</p>
      </CardContent>
    </Card>
  );
};
