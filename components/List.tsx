"use client"
import { Garden } from "@/types"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function List({
  pathName,
  items,
  children,
}: {
  children: any
  pathName: string
  items: { label: string; id: string }[]
}) {
  return (
    <div className="w-80 grid-cols-1">
      {items.map((item, index) => (
        <div key={index}>
          <Link
            href={pathName + item.id}
            className={
              "my-2 block rounded-lg border-2 px-4 py-2 text-sm transition hover:bg-indigo-400 hover:text-white "
            }
          >
            {item.label}
          </Link>
        </div>
      ))}
      {children}
    </div>
  )
}
