
import * as React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import dynamic from "next/dynamic";
import {useEffect, useState} from 'react';

const NextUIProvider = dynamic(()=>import("@nextui-org/react"), {ssr: false});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  }, []);

  return (
    
    <div className="h-screen bg-background">
      <Navbar/>
      {isClient && <NextUIProvider>
          {children}
      </NextUIProvider>}
    </div>
  );
}
