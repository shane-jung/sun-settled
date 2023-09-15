import { getSubscriber } from "@/lib/subscribers"
import { SubscriberWithRelations } from "@/types"

interface Props {
  params: {
    id: string
  }
}
export default async function Page({ params }: Props) {
  const subscriber = await getSubscriber({
    id: params.id,
  })
  return <p>Hello</p>
}
