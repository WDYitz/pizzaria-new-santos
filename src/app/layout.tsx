import { Roboto } from "next/font/google"; // Font's
import type { Metadata } from "next"; // Meta Datas

// Components
import { Navigation } from "@/components/navigation/navigation";

// Styles
import "./globals.css";

// Types
import { ChildrenType } from "@/types/ChildrenType";

const roboto = Roboto({
  weight: ["100", "300", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzaria New Santos",
  description: "Pizzaria New Santos com as melhores pizzas da baixada.",
};

export default function RootLayout({ children }: Readonly<ChildrenType>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
