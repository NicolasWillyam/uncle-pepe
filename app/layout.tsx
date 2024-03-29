import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uncle Pepe Coin",
  description: "",
  icons: {
    icon: "/uncle-pepe-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#09121d" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
