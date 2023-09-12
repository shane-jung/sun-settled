import { Suspense } from "react"
import Navigation from "@/components/Navigation"
import { getGarden } from "@/lib/fetchData"

const links = [
  { href: "", label: "Overview" },
  { href: "/subscribers", label: "Subscribers" },
  { href: "/production", label: "Production History" },
]

export default async function Layout({
  params,
  children,
}: {
  children: any
  params: {
    id: string
  }
}) {
  const garden = await getGarden({ id: params.id })

  return (
    <div className="w-full">
      <h1 className="py-2 text-2xl">{garden?.name}</h1>
      <Navigation
        navLinks={links.map((link) => {
          return {
            ...link,
            href: `/gardens/${params.id}${link.href}`,
          }
        })}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="pl-4 pt-2">{children}</div>
      </Suspense>
    </div>
  )
}
