import { getGarden } from "@/lib/fetchData"
import { GardenWithRelations } from "@/types"

export default async function Subscribers({
  params,
}: {
  params: { id: string }
}) {
  const garden: GardenWithRelations = await getGarden({ id: params.id })
  console.log(garden)

  return <h2>hello</h2>
}
