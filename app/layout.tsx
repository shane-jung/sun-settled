import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Solar Billing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body data-theme="emerald" className={"flex flex-row gap-2 pt-4 " + inter.className}>
          <NavMenu />
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
