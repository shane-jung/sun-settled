import { Subscriber } from "@/types"
import Link from "next/link"

export default async function Page() {
  const subscribers: Subscriber[] = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/subscribers`)
  ).json()
  console.log(subscribers)
  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
      <h3 className="mb-4 text-2xl">Subscribers</h3>
      <Link
        href="/subscribers/create"
        className="btn absolute right-0 top-0 text-sm"
      >
        Create New Subscriber
      </Link>
      <div className="col-span-2 rounded border-2 bg-white p-4 shadow-md">
        <table>
          <thead className="text-left">
            <tr>
              <th>Subscriber Name</th>
              <th>Capacity (kW)</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {subscribers.slice(0, 5).map((subscriber: Subscriber) => (
              <tr>
                <td>
                  <Link
                    href={`/subscribers/${subscriber.id}`}
                    className="link "
                  >
                    {subscriber.name}
                  </Link>
                </td>
                <td>{subscriber.allocation.toString()}</td>
                <td>
                  <Link href={`/subscribers/${subscriber.id}`} className="link">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rounded border-2 bg-white p-4 shadow-md">
        <h3 className="mb-2 text-xl ">Scheduled Payments</h3>
      </div>
      <div className="rounded border-2 bg-white p-4 shadow-md">
        <h3 className="mb-2 text-xl ">Todo</h3>
      </div>
    </div>
  )
}
