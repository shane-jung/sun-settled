import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  HiBanknotes,
  HiBriefcase,
  HiCog,
  HiCurrencyDollar,
  HiHome,
  HiNewspaper,
  HiReceiptPercent,
  HiSun,
  HiUserGroup,
} from "react-icons/hi2"

import AuthProvider from "../components/AuthProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Home | Sun Settled",
}

const navItems = [
  {
    href: "/",
    icon: <HiHome />,
    label: "Home",
  },
  {
    href: "/gardens",
    icon: <HiSun />,
    label: "Gardens",
  },
  {
    href: "/subscribers",
    icon: <HiUserGroup />,
    label: "Subscribers",
  },
  {
    href: "/invoices",
    icon: <HiNewspaper />,
    label: "Invoices",
  },
  {
    href: "/plans",
    icon: <HiCog />,
    label: "Plans",
  },
  {
    href: "/jobs",
    icon: <HiBriefcase />,
    label: "Jobs",
  },
]

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
        <body>
          <div className="navbar bg-primary">
            <Link
              className="font-display transition flex items-center ml-4 "
              href={"/"}
            >
              <Image
                height={30}
                width={30}
                src="/logo.png"
                alt="Sun Settled"
                className="mr-1"
              />
              <h1 className="text-[28px]  text-white relative top-1 hover:text-gray-300 transition">
                Sun Settled
              </h1>
            </Link>

            {/* <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label> */}
          </div>

          <div className="drawer lg:drawer-open ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <div className="px-8 py-4 bg-base-100 min-h-full">{children}</div>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-64 min-h-full text-slate-600 ">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="menu-item py-2">
                      {item.icon}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </body>
      </html>
    </AuthProvider>
  )
}
