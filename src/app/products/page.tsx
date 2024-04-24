/* const Products = () => {
  return (
    <main className="h-full w-full flex flex-col gap-4 p-4 md:gap-8 md:p-8 bg-dark-gray text-white">
      <h1>Products Page</h1>
    </main>
  );
}; */

import { SearchProfileHeader } from "@/components/search-profile-header";
import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <main className="h-full w-full flex flex-col gap-4 p-4 md:gap-8 md:p-8 bg-dark-gray text-white">
      <SearchProfileHeader hasSearchInput pageTitle="Produtos"/>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm bg-dark-gray">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Você não tem nenhum produto
          </h3>
          <p className="text-sm text-muted-foreground">
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
