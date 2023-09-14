import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"

import AuthProvider from "./AuthProvider"
import TopBar from "./TopBar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Home | Sun Settled",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  test: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="bg-gray-100">
          <TopBar />
          <div className="pt-16 min-h-[100vh]">{children}</div>
        </body>
      </html>
    </AuthProvider>
  )
}
