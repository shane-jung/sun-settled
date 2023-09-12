import { getGarden } from "@/lib/fetchData"

export default async function Garden({ params }: { params: { id: string } }) {
  const garden = await getGarden({ id: params.id })

  return <p>Capacity DC: {garden?.capacityDc.toString()}</p>
}
