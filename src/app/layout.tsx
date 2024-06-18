import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Layout/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BarberShop",
  description: "A barberShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
