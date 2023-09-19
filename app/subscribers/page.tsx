import DashboardPanel from "@/components/DashboardPanel"
import { getAllSubscribers } from "@/lib/subscribers"
import { Subscriber } from "@/types"
import Link from "next/link"

export default async function Page() {
  const subscribers: Subscriber[] = await getAllSubscribers()
  return (
    <div className="relative ">
      <h2 className="text-2xl font-medium mb-4">Subscribers</h2>
      <Link
        href="/subscribers/create"
        className="btn btn-primary btn-sm absolute right-0 top-0 text-sm"
      >
        Create New Subscriber
      </Link>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <DashboardPanel className="col-span-12">
          <DashboardPanel.Title>Overview</DashboardPanel.Title>
          <DashboardPanel.Body>
            <table className="table">
              <thead>
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
                      <Link href={`/subscribers/${subscriber.id}`}>
                        {subscriber.name}
                      </Link>
                    </td>
                    <td>
                      <Link
                        href={`/gardens/${subscriber.gardenId}`}
                        className="btn btn-link "
                      >
                        {subscriber.gardenId}
                      </Link>
                    </td>
                    <td>{subscriber.allocation.toString()}</td>
                    <td>
                      <Link
                        href={`/subscribers/${subscriber.id}`}
                        className="link"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DashboardPanel.Body>
        </DashboardPanel>
      </div>
    </div>
  )
}
