import DashboardPanel from "@/components/DashboardPanel"
import { Badge } from "@tremor/react"
import Link from "next/link"

export default function GardenTasks() {
  return (
    <DashboardPanel className="col-span-1 lg:col-span-7">
      <DashboardPanel.Title>Tasks</DashboardPanel.Title>
      <DashboardPanel.Action>
        <Link href="/gardens" as={`/gardens`}>
          View All
        </Link>
      </DashboardPanel.Action>
      <DashboardPanel.Body>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Update Production Data</p>
              </td>
              <td>
                It's been a while since you reported production data for Emerge
                Second Chance Solar Garden. Please update the production data
                for this garden.
              </td>
              <td>
                <Badge color="red">Urgent</Badge>
              </td>
            </tr>
            <tr>
              <td>Update Subscriber Records</td>
              <td>
                Some of your subscribers for North High Community Solar Garden
                are set to be billed on{" "}
                <span className="font-medium">October 1st, 2023</span>. Please
                make sure production data and subscriber records are up to date.
              </td>
              <td>
                <Badge color="yellow">Medium</Badge>
              </td>
            </tr>
          </tbody>
        </table>
      </DashboardPanel.Body>
    </DashboardPanel>
  )
}
