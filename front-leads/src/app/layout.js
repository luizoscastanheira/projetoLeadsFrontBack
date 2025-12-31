import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// importando componentes
import Topo from "@/componentes/Topo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Front-End API Leads",
  description: "Um front-end criado para testar a API de LEADS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Topo />
        {children}
      </body>
    </html>
  );
}
