import { Roboto } from "next/font/google"; // Font's
import type { Metadata } from "next"; // Meta Datas
import { Providers } from "@/utils/providers";
import { Navigation } from "@/components/navigation/navigation"; // Components
import "./globals.css"; // Styles
import { ChildrenType } from "@/types/ChildrenType"; // Types

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
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
