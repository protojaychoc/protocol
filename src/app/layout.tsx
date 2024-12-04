import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import {Menu} from '../components/Menu'
import {MenuProvider } from '../contexts/MenuContext';
import BodyClassManager from "../components/BodyClassManager";

export const metadata: Metadata = {
  title: "Protocol",
  description: "Protocol, votre prestataire informatique de proximité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${GeistSans.variable} antialiased h-full m-auto font-sans`}
      >
        <MenuProvider >
        <BodyClassManager />
          <Header />
          <Menu />
          <main className={`lg:px-6 lg:pt-[var(--header-height)]`}>
            {children}
          </main>
          <Footer />
        </MenuProvider >
      </body>
    </html>
  );
}
