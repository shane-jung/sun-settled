import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"

import AuthProvider from "../components/AuthProvider"
import TopBar from "../components/TopBar"
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
        <head>
          <meta charSet="utf-8" />
          <meta name="description" content="Sun Settled" />
          <meta name="author" content="Sun Settled" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="bg-gray-100">
          <TopBar />
          <div className="pt-16 min-h-[100vh]">{children}</div>
        </body>
      </html>
    </AuthProvider>
  )
}
