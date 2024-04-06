import {
  MenuIcon,
  Package2,
  ShoppingCart,
  Package,
  Users2,
  LineChart,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";

export const HeaderMobile = () => {
  return (
    <header className="p-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Pizzaria New Santos</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground hover:bg-zinc-200 rounded-md"
            >
              <RxDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 py-2 text-foreground hover:bg-zinc-200 rounded-md"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
            </Link>
            <Link
              href="#"
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
