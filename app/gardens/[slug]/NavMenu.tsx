"use client"
import { StyledLink } from "@/components/links"
import { usePathname } from "next/navigation"

const links = [
  { href: "", label: "Overview" },
  { href: "subscribers/", label: "Subscribers" },
  { href: "production/", label: "Production History" },
]

export default function NavMenu() {
  const pathname = usePathname()
  const id = pathname.split("/")[2]
  return (
    <div className="text-md mb-2 flex flex-row border-b-2">
      {links.map((link, index) => (
        <StyledLink
          className={
            "p-2 " +
            (pathname === "/gardens/" + id + "/" + link.href
              ? "border-b-2 border-slate-700"
              : "")
          }
          key={index}
          href={`/gardens/${id}/${link.href}`}
        >
          {link.label}
        </StyledLink>
      ))}
    </div>
  )
}
