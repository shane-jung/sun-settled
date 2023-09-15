import { getGarden } from "@/lib/gardens"
import { GardenWithRelations } from "@/types"

export default async function Subscribers({
  params,
}: {
  params: { id: string }
}) {
  const garden = await getGarden({ id: params.id })

  return <h2>hello</h2>
}
