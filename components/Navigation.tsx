"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation({
  navLinks,
}: {
  navLinks: { href: string; label: string }[]
}) {
  const pathname = usePathname()
  return (
    <div className="mb-4 flex flex-row gap-4 border-b-2">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href
        return (
          <Link
            className={
              "border-b-2 px-2 py-2 text-center font-bold transition duration-500" +
              (isActive ? " border-blue-900 text-blue-900" : "")
            }
            key={index}
            href={`${link.href}`}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}
