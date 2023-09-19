import type { Metadata } from "next"
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
      <html lang="en" data-theme="emerald">
        <head>
          <meta charSet="utf-8" />
          <meta name="description" content="Sun Settled" />
          <meta name="author" content="Sun Settled" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div className="navbar bg-primary/50">
            <Link className="text-xl font-bold px-4 transition" href={"/"}>
              Sun Settled
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
              <div className="px-8 py-4 ">{children}</div>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-64 min-h-full bg-base text-base-content">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="menu-item ">
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
