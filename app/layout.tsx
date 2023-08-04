import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavMenu from "./NavMenu"
import AuthProvider from "./AuthProvider"
import TopBar from "./TopBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Community Solar Billing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <NavMenu />
          <div className="max-w-[100vw] p-8 pl-72 xl:pr-2">{children}</div>
        </body>
      </html>
    </AuthProvider>
  )
}
