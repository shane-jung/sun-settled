"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Community Solar Gardens",
    path: "/gardens",
  },
  {
    name: "Subscribers",
    path: "/subscribers",
  },
  {
    name: "Billing",
    path: "/billing",
  },
  {
    name: "Invoices",
    path: "/invoices",
  },
]

export default function NavMenu() {
  const pathName = usePathname()
  return (
    <div className="border-right border-right shadow-lg shadow-slate-400">
      <div className="gap-2px-4 sticky top-0  z-20 items-center py-4 ">
        <Link
          className="px-4 text-center text-3xl font-bold text-slate-900"
          href={"/"}
        >
          Sun Settled
        </Link>
      </div>
      <aside className="w-60">
        <ul className="text-md">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={
                "m-2 rounded-md transition hover:bg-indigo-500 hover:text-white"
              }
            >
              <Link href={item.path} className="block h-full w-full p-2 pl-4 ">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
