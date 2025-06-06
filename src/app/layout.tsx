
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
import { ChakraProvider } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: "Parag Ghatage",
  description: "Parag Ghatage's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <body className={`${inter.className} bg-black`}>
        <ChakraProvider>
      <Analytics/>
        <div>
        <Navbar/>
        </div>
        </ChakraProvider>
        
        {children}
      </body>
    </html>
  );
}
