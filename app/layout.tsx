import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavMenu from "./NavMenu"
import AuthProvider from "./AuthProvider"
import { SignInButton } from "@/components/buttons"
import { Link } from "@/components/links"
import Image from "next/image"

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
          <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-between border-b border-slate-700 bg-opacity-90 shadow-sm backdrop-blur transition-all duration-100">
            <div className="gap-2px-4 sticky top-0  z-20 items-center py-4 ">
              <Link className="mb-14 flex items-center pl-3" href={"/"}>
                <div className="relative mr-1 h-8 w-8">
                  <Image src="/logo.png" alt="logo" fill />
                </div>
                <h1 className="text-2xl font-bold text-[#111827]">
                  Sun Settled
                </h1>
              </Link>
            </div>
            <SignInButton />
          </div>
          <NavMenu />
          <div className="max-w-[100vw] p-8 pl-72 xl:pr-2">{children}</div>
        </body>
      </html>
    </AuthProvider>
  )
}
