import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <main className="flex w-full flex-col gap-4 bg-dark-gray p-4 text-white md:gap-8 md:p-8 h-full">
      <Search pageTitle="Produtos" />
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed bg-dark-gray shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Você não tem nenhum produto
          </h3>
          <p className="text-muted-foreground text-sm">
            você pode começar a vender assim que adicionar um produto.
          </p>
          <Button variant="default" className="mt-4 bg-[#1e1e1e]">
            Add Produto
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Products;
