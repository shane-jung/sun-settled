"use client"

import { HomeIcon, Receipt, ScrollText, Sun, Users } from "lucide-react"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

const navItems: {
  name: string
  path: string
  icon: LucideIcon
  color: string
}[] = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
    color: "text-white-400",
  },
  {
    name: "Community Solar Gardens",
    path: "/gardens",
    icon: Sun,
    color: "text-yellow-500",
  },
  {
    name: "Subscribers",
    path: "/subscribers",
    icon: Users,
    color: "text-indigo-400",
  },
  {
    name: "Billing",
    path: "/billing",
    icon: Receipt,
    color: "text-green-500",
  },
  {
    name: "Invoices",
    path: "/invoices",
    icon: ScrollText,
    color: "text-red-400",
  },
]

export default function NavMenu() {
  // const pathname = usePathname().split("/")[1]
  return (
    <div className="fixed flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        {navItems.map((item, index) => (
          <div key={index} className={"space-y-1"}>
            <Link
              href={item.path}
              className="align-center group flex w-full justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white"
            >
              <item.icon className={`mr-3 h-5 w-5 ${item.color}`} />
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
