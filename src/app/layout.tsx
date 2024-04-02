import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarMenu } from "@/components/Panel/components/SidebarMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDigitalização",
  description: "Sistema Gerenciador de Documentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-slate-100 ${inter.className}`}>
          {children}
      </body>
    </html>
  );
}
