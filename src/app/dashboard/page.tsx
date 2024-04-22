import { DashboardCards } from "@/components/dashboard/_dashboard";
import { DashboardProfitCard } from "@/components/dashboard/dashboard-card-profit";
import { ProfileImage } from "@/components/profile-image";
/* import { RecentOrders } from "@/components/orders-table"; */

const Dashboard = () => {
  return (
    <main className="h-full w-full flex flex-col gap-4 p-4 md:gap-8 md:p-8 bg-dark-gray text-white">
      <div className="flex justify-end">
        <ProfileImage src={""} />
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
