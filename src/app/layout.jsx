import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tutoring Site",
  description: "A website for my tutoring business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-background">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
