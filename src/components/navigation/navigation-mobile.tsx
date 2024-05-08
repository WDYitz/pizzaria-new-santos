import {
  LineChart,
  MenuIcon,
  Package,
  Pizza,
  Settings,
  ShoppingCart,
  Users2,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const NavigationMobile = () => {
  return (
    <header className="w-full bg-dark-gray p-2 sm:hidden">
      <Sheet>
        <SheetTrigger asChild className="bg-light-gray">
          <Button
            size="icon"
            variant="outline"
            className="border-indigo-500 bg-transparent text-indigo-500 hover:text-zinc-300 sm:hidden"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-r-0 bg-light-gray text-white sm:max-w-xs"
        >
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground hover:bg-zinc-200 flex w-[60%] items-center gap-4 rounded-md px-2.5 py-2"
            >
              <Pizza className="h-5 w-5 text-indigo-500 transition-all" />
              <span className="sr-only">Pizzaria New Santos</span>
            </Link>
            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-foreground hover:bg-zinc-200 flex items-center gap-4 rounded-md px-2.5 py-2"
            >
              <RxDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/orders"
              className="text-foreground hover:bg-zinc-200 flex items-center gap-4 rounded-md px-2.5 py-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
            </Link>
            <Link
              href="/products"
              className="text-muted-foreground hover:text-foreground hover:bg-zinc-200 flex items-center gap-4 rounded-md px-2.5 py-2"
            >
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="/restaurants"
              className="text-muted-foreground hover:text-foreground hover:bg-zinc-200 flex items-center gap-4 rounded-md px-2.5 py-2"
            >
              <Utensils className="h-5 w-5" />
              Restaurants
            </Link>
            <Link
              href="/clients"
              className="text-muted-foreground hover:text-foreground hover:bg-zinc-200 flex items-center gap-4 rounded-md px-2.5 py-2"
            >
              <Users2 className="h-5 w-5" />
              Clients
            </Link>
            <Link
              href="/analytics"
              className="text-muted-foreground hover:text-foreground hover:bg-zinc-200 flex items-center gap-4 rounded-md px-2.5 py-2"
            >
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
            <Link
              href="/settings"
              className="text-muted-foreground hover:text-foreground hover:bg-zinc-200 flex items-center gap-4 rounded-md px-2.5 py-2"
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
