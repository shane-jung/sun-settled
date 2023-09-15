import Link from "next/link"

const pages = [
  {
    name: "Gardens",
    href: "/gardens",
  },
  {
    name: "Subscribers",
    href: "/subscribers",
  },
  {
    name: "Billing",
    href: "/billing",
  },
  {
    name: "Invoices",
    href: "/invoices",
  },
]

export default function Home() {
  return (
    <div>
      <h2 className="mb-8 text-2xl">Dashboard</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {pages.map((page: any) => (
          <div className="panel">
            <h3 className="text-xl font-semibold">{page.name}</h3>
            <Link href={page.href}>View all {page.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
