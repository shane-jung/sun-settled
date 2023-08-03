import { Metadata } from "next"
import { Garden } from "@prisma/client"
import List from "../../components/List"
import { StyledLink } from "@/components/links"
import { Heading } from "@/components/typography"

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
      <Heading className="border-b-2">Gardens</Heading>

      <div className="flex gap-4">
        <List
          pathName={"/gardens/"}
          items={gardens.map((garden) => ({
            id: garden.slug,
            label: garden.name,
          }))}
        >
          <div>
            <StyledLink
              className="mx-auto my-2 block rounded bg-lime-500 px-4 py-2 text-center text-white transition hover:bg-lime-400"
              href={"/gardens/create"}
            >
              Add a Garden
            </StyledLink>
          </div>
        </List>

        <div className="container flex">{children}</div>
      </div>
    </>
  )
}
