import { getSubscriber } from "@/lib/subscribers"
import Link from "next/link"

// const navLinks = [
//   { href: "", label: "Overview" },
//   { href: "/invoices", label: "Payment History" },
// ]

export default async function Layout({
  params,
  children,
}: {
  params: any
  children: any
}) {
  const subscriber = await getSubscriber({ id: params.id })
  return (
    <div>
      <div className="mb-2 text-sm">
        <Link href="/subscribers" className="link text-blue-700">
          Subscribers /
        </Link>
        <span> {subscriber?.name} </span>
      </div>
      <h1 className="py-2 text-2xl">{subscriber?.name}</h1>
      <p className="text-sm">{subscriber?.email}</p>
      {/* <Navigation
        navLinks={navLinks.map((link) => {
          return {
            ...link,
            href: `/subscribers/${params.id}${link.href}`,
          }
        })}
      /> */}
      {children}
    </div>
  )
}
