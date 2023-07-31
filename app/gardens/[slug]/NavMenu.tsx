"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "", label: "Overview" },
  { href: "subscribers/", label: "Subscribers" },
  { href: "production/", label: "Production History" },
]

export default function NavMenu() {
  const id = usePathname().split("/")[2]
  return (
    <ul className="text-md mb-2 flex flex-row gap-12 border-b-2 px-4">
      {links.map((link, index) => (
        <li key={index} className="p-2">
          <Link href={`/gardens/${id}/${link.href}`}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}
