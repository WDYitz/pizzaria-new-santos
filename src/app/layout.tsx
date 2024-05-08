import { Navigation } from "@/components/navigation/navigation"; // Components
import { ChildrenType } from "@/types/ChildrenType"; // Types
import type { Metadata } from "next"; // Meta Datas
import { Poppins } from "next/font/google"; // Font's
import "./globals.css"; // Styles

const poppins = Poppins({
  weight: ["100", "300", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzaria New Santos ADM",
  description: "Pizzaria New Santos ADM",
};

export default function RootLayout({ children }: Readonly<ChildrenType>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
