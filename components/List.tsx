"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function List({
  pathName,
  items,
  children,
}: {
  children?: any
  pathName: string
  items: { name: string; id: string }[]
}) {
  const pathname = usePathname()
  return (
    <ul role="list" className="min-w-[350px] divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="w-full gap-x-4 first-line:gap-x-4">
          <Link
            className="link h-full w-full py-4 pl-6 transition hover:bg-gray-100"
            href={pathName + item.id}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
