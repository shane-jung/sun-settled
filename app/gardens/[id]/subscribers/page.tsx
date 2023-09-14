import { GardenWithRelations } from "@/types"

export default async function Subscribers({
  params,
}: {
  params: { id: string }
}) {
  const garden: GardenWithRelations = await fetch(
    `http://localhost:3000/api/gardens?id=${params.id}`,
    { next: { revalidate: 1 } }
  ).then((res) => res.json())

  return <h2>hello</h2>
}
