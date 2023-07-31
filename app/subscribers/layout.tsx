import List from "@/components/List"
import { prisma } from "@/lib/prisma"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Community Solar Gardens",
  description: "Community Solar Billing",
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const subscribers = await prisma.subscriber.findMany()

  return (
    <>
      <h1 className="w-full border-b-2 pb-4 pl-3 text-3xl">Subscribers</h1>
      <div className="flex gap-4">
        <List
          items={subscribers.map((subscriber) => ({
            id: subscriber.id,
            label: subscriber.name,
          }))}
          pathName="/subscribers/"
        >
          <div>
            <Link
              className="mx-auto my-2 block rounded bg-lime-500 px-4 py-2 text-center text-white transition hover:bg-lime-400"
              href={"/subscribers/create"}
            >
              Add a Subscriber
            </Link>
          </div>
        </List>

        <div className="container">{children}</div>
      </div>
    </>
  )
}
