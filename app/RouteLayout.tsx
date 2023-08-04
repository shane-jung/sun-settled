import List from "@/components/List"
import Link from "next/link"
import { Heading } from "@/components/typography"

export default function RouteLayout({
  children,
  items,
  label,
  pathName,
}: {
  children: React.ReactNode
  items: { name: string; id: string }[]
  label: string
  pathName: string
}) {
  return (
    <div className="flex">
      <div>
        <Link className="mb-2 block text-3xl" href={pathName}>
          {label}s
        </Link>
        <div>
          <List
            pathName={pathName}
            items={items.map((item) => ({
              id: item.id,
              name: item.name,
            }))}
          />
          <div>
            <Link
              className="mx-auto my-2 block rounded bg-lime-500 px-4 py-2 text-center text-white transition hover:bg-lime-400"
              href={`${pathName}create`}
            >
              Create {label}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  )
}
