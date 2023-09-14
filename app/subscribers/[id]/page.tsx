import { getSubscriber } from "@/lib/fetchData"
import { SubscriberWithRelations } from "@/types"

interface Props {
  params: {
    id: string
  }
}
export default async function Page({ params }: Props) {
  const subscriber: SubscriberWithRelations = await getSubscriber({
    id: params.id,
  })
  return <p>Hello</p>
}
