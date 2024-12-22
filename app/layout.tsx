import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { SessionProvider } from 'next-auth/react';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'OncoSight',
  description: 'Health Care',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
      <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}