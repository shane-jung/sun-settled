import DashboardPanel from "@/components/DashboardPanel"
import { getAllGardens } from "@/lib/gardens"
import { Garden } from "@/types"
import Link from "next/link"

export default async function GardenOverviewTable() {
  const gardens = await getAllGardens({
    include: { subscribers: true, readings: true },
  })
  return (
    <DashboardPanel className="col-span-2 lg:col-span-3 panel">
      <DashboardPanel.Title>Overview</DashboardPanel.Title>
      <DashboardPanel.Body>
        <table>
          <thead className="text-left">
            <tr>
              <th>Garden Name</th>
              <th>Capacity (kW)</th>
              <th>Subscribers </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gardens.map((garden: Garden) => (
              <tr key={garden.id}>
                <td>
                  <Link href={`/gardens/${garden.id}`} className="link ">
                    {garden.name}
                  </Link>
                </td>
                <td>{garden.capacityDc.toString()}</td>
                <td>{garden.subscribers.length.toString()}</td>
                <td>
                  <Link href={`/gardens/${garden.id}`} className="link">
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
