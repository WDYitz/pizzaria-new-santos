import {
  MenuIcon,
  ShoppingCart,
  Package,
  Users2,
  LineChart,
  Settings,
  Pizza,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";

export const HeaderMobile = () => {
  return (
    <header className="p-2 sm:hidden bg-dark-gray w-full">
      <Sheet>
        <SheetTrigger asChild className="bg-light-gray text-white">
          <Button
            size="icon"
            variant="outline"
            className="sm:hidden hover:text-zinc-300 border-indigo-500"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="sm:max-w-xs bg-light-gray text-white border-r-0"
        >
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="w-[60%] flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground hover:bg-zinc-200 rounded-md"
            >
              <Pizza className="h-5 w-5 transition-all text-indigo-500" />
              <span className="sr-only">Pizzaria New Santos</span>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground hover:bg-zinc-200 rounded-md"
            >
              <RxDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/orders"
              className="flex items-center gap-4 px-2.5 py-2 text-foreground hover:bg-zinc-200 rounded-md"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground hover:bg-zinc-200 rounded-md"
            >
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground hover:bg-zinc-200 rounded-md"
            >
              <Users2 className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground hover:bg-zinc-200 rounded-md"
            >
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground hover:bg-zinc-200 rounded-md"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
