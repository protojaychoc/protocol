import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import {MenuDesktop} from '../components/MenuDesktop'
import {MenuDesktopProvider} from '../contexts/MenuDesktopContext';


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
        className={`${GeistSans.variable} antialiased h-full w-full m-auto font-sans`}
      >
        <MenuDesktopProvider>
          <Header />
          <MenuDesktop />
          {children}
          <Footer />
        </MenuDesktopProvider>
      </body>
    </html>
  );
}
