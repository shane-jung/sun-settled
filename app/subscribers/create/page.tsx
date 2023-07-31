import { prisma } from "@/lib/prisma"
import SubscriberForm from "./SubscriberForm"

export default async function Page() {
  const gardens = await fetch(`http://localhost:3000/api/gardens`).then((res) =>
    res.json()
  )
  return (
    <div className="container">
      <SubscriberForm gardens={gardens} />
    </div>
  )
}
