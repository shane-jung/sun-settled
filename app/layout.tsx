import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React, { Suspense } from "react"
// import { Elements } from "@stripe/react-stripe-js"
// import { loadStripe } from "@stripe/stripe-js"

import Loading from "./loading"
import NavMenu from "./NavMenu"
import AuthProvider from "./AuthProvider"
import TopBar from "./TopBar"

// const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY!)

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Community Solar Billing",
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
        <body className={inter.className}>
          <TopBar />
          <Suspense fallback={<Loading />}>
            <div className="max-w-[100vw] p-24 ">{children}</div>
          </Suspense>
        </body>
      </html>
    </AuthProvider>
  )
}
