import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavMenu from "./NavMenu"
import AuthProvider from "./AuthProvider"
import { SignInButton } from "@/components/buttons"

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
          <div className="flex h-full">
            <NavMenu />
            <div className="container">
              <div className="sticky top-0 z-30 flex h-16 w-full justify-end bg-base-100 bg-opacity-90 text-base-content shadow-sm backdrop-blur transition-all duration-100">
                <SignInButton />
              </div>
              <div className="container max-w-[100vw] px-6 xl:pr-2">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </AuthProvider>
  )
}
