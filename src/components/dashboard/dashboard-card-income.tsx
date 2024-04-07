import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const DashboardIncomeCard = ({
  title,
  income,
  porcent,
}: {
  title: string;
  income: number;
  porcent: number;
}) => {
  return (
    <Card className="bg-light-gray text-white border-transparent">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{`R$ ${income}`}</div>
        <p className="text-xs text-muted-foreground">{`${porcent}% do mês passado`}</p>
      </CardContent>
    </Card>
  );
};
