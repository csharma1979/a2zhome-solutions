"use client";

import dynamic from 'next/dynamic';
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";
import { HelmetProvider } from "react-helmet-async";
import { Suspense } from 'react';
import Loading from './loading';

const Navigation = dynamic(() => import('@/components/Navigation'), {
  loading: () => <Loading />,
  ssr: true
});

// Dynamic imports for better code splitting
const Header = dynamic(() => import("../src/components/commonComps/Header"), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Footer = dynamic(() => import("../src/components/commonComps/Footer"), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.includes('admin');

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>A2Z Home Solutions</title>
        <meta name="description" content="Your trusted partner for home solutions" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <HelmetProvider>
          <Suspense fallback={<div>Loading...</div>}>
            {!isAdminRoute && <Header />}
            {children}
            {!isAdminRoute && <Footer />}
          </Suspense>
        </HelmetProvider>
      </body>
    </html>
  );
}
