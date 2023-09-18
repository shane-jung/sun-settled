import { getAllSubscribers } from "@/lib/subscribers"
import { Subscriber } from "@/types"
import Link from "next/link"

export default async function Page() {
  const subscribers: Subscriber[] = await getAllSubscribers()
  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
      <h3 className="mb-4 text-2xl">Subscribers</h3>
      <Link
        href="/subscribers/create"
        className="btn btn-primary absolute right-0 top-0 text-sm"
      >
        Create New Subscriber
      </Link>
      <div className="col-span-2 panel">
        <table>
          <thead className="text-left">
            <tr>
              <th>Subscriber Name</th>
              <th>Garden</th>
              <th>Allocation (kW)</th>

              <th />
            </tr>
          </thead>
          <tbody>
            {subscribers.slice(0, 5).map((subscriber: Subscriber) => (
              <tr key={subscriber.id}>
                <td>
                  <Link
                    href={`/subscribers/${subscriber.id}`}
                    className="link "
                  >
                    {subscriber.name}
                  </Link>
                </td>
                <td>
                  <Link
                    href={`/gardens/${subscriber.gardenId}`}
                    className="link "
                  >
                    {subscriber.gardenId}
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
      <div className="panel">
        <h3 className="mb-2 text-xl ">Scheduled Payments</h3>
      </div>
      <div className="panel">
        <h3 className="mb-2 text-xl ">Todo</h3>
      </div>
    </div>
  )
}
