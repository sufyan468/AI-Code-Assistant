import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar } from "./Components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  showAppBar,
}: Readonly<{
  children?: React.ReactNode;
  showAppBar: true;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex row-auto">
          {showAppBar && <AppBar />}
          <div className="flex-1 width-calc">{children}</div>
        </div>
      </body>
    </html>
  );
}
