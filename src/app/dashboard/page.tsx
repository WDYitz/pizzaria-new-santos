import { DashboardCards } from "@/components/dashboard/_dashboard";
import { DashboardProfitCard } from "@/components/dashboard/dashboard-card-profit";
import { Search } from "@/components/search";

const Dashboard = () => {
  return (
    <main className="flex h-full w-full flex-col gap-4 bg-dark-gray p-4 text-white md:gap-8 md:p-8">
      <div className="flex justify-end">
        <Search pageTitle="Dashboard" />
      </div>

      <DashboardCards.Root>
        <DashboardCards.Income
          title="Rendimento Total"
          income={0}
          porcent={0}
        />
        <DashboardCards.OrderQuantity
          title="Total de Pedidos"
          qtd={0}
          porcent={0}
        />
        <DashboardCards.Outgoing
          title="Total de Gastos"
          outgoing={0}
          porcent={0}
        />
        <DashboardProfitCard title="Lucro Total" profit={0} porcent={0} />
      </DashboardCards.Root>
      {/*    <RecentOrders /> */}
    </main>
  );
};

export default Dashboard;
