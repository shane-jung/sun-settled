import DashboardPanel from "@/components/DashboardPanel"
import { Subscriber } from "@/types"
import Link from "next/link"

export default function GardenSubscribersTable({
  subscribers,
  id,
}: {
  subscribers: Subscriber[]
  id: string
}) {
  return (
    <DashboardPanel className="col-span-1 lg:col-span-6">
      <DashboardPanel.Title>Subscribers</DashboardPanel.Title>
      <DashboardPanel.Action>
        <Link
          href="/gardens/[id]/subscribers"
          as={`/gardens/${id}/subscribers`}
          className="link"
        >
          View All
        </Link>
      </DashboardPanel.Action>

      <DashboardPanel.Body>
        <table className="table">
          <thead className="text-left">
            <tr>
              <th>Subscriber Name</th>
              <th>Allocation (kW)</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {subscribers?.map((subscriber: Subscriber) => (
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
      </DashboardPanel.Body>
    </DashboardPanel>
  )
}
