import { Metadata } from "next"
import Link from "next/link"
import { Garden } from "@prisma/client"
import { usePathname } from "next/navigation"
import GardenList from "../../components/List"
import List from "../../components/List"

export const metadata: Metadata = {
  title: "Community Solar Gardens",
  description: "Community Solar Billing",
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const gardens: Garden[] = await fetch("http://localhost:3000/api/gardens", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())

  return (
    <>
      <h1 className="w-full border-b-2 pb-4 pl-3 text-3xl">Gardens</h1>

      <div className="flex gap-4">
        <List
          pathName={"/gardens/"}
          items={gardens.map((garden) => ({
            id: garden.slug,
            label: garden.name,
          }))}
        >
          <div>
            <Link
              className="text- mx-auto my-2 block rounded bg-lime-500 px-4 py-2 text-center text-white transition hover:bg-lime-400"
              href={"/gardens/create"}
            >
              Add a Garden
            </Link>
          </div>
        </List>

        <div className="container flex">{children}</div>
      </div>
    </>
  )
}
