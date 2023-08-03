import List from "@/components/List"
import { StyledLink } from "@/components/links"
import { Heading } from "@/components/typography"
import { prisma } from "@/lib/prisma"
import { Metadata } from "next"

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
      <Heading className="border-b-2">Subscribers</Heading>
      <div className="flex gap-4">
        <List
          items={subscribers.map((subscriber) => ({
            id: subscriber.id,
            label: subscriber.name,
          }))}
          pathName="/subscribers/"
        >
          <div>
            <StyledLink
              className="mx-auto my-2 block rounded bg-lime-500 px-4 py-2 text-center text-white transition hover:bg-lime-400"
              href={"/subscribers/create"}
            >
              Add a Subscriber
            </StyledLink>
          </div>
        </List>

        <div className="container">{children}</div>
      </div>
    </>
  )
}
