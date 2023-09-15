import DashboardPanel from "@/components/DashboardPanel"
import { getAllGardens } from "@/lib/gardens"
import { Garden, GardenWithRelations } from "@/types"
import { Metadata } from "next"
import Link from "next/link"

const panels = [
  {
    title: "Subscribers",
    action: <Link href="/gardens/[id]/subscribers">View All</Link>,
    body: <p>Paragraph 1</p>,
  },
  {
    title: "Production",
    action: <Link href="/gardens/[id]/production">View All</Link>,
    body: <p>Paragraph 1</p>,
  },
  {
    title: "Subscriptions",
    action: <Link href="/gardens/[id]/subscriptions">View All</Link>,
    body: <p>Paragraph 1</p>,
  },
]

export const metadata: Metadata = {
  title: "Community Solar Gardens | Sun Settled",
}

export default async function Page() {
  const gardens: Garden[] = await getAllGardens({ include: {} })
  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
      <h3 className="mb-4 text-2xl">Gardens</h3>
      <Link
        href="/gardens/create"
        className="btn absolute right-0 top-0 text-sm"
      >
        Create New Garden
      </Link>
      <div className="col-span-2 panel">
        <table>
          <thead className="text-left">
            <tr>
              <th>Garden Name</th>
              <th>Capacity (kW)</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {gardens.map((garden: Garden) => (
              <tr>
                <td>
                  <Link href={`/gardens/${garden.id}`} className="link ">
                    {garden.name}
                  </Link>
                </td>
                <td>{garden.capacityDc.toString()}</td>
                <td>
                  <Link href={`/gardens/${garden.id}`} className="link">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td>Totals</td>
              <td>
                {gardens
                  .reduce(
                    (acc: number, garden: Garden) =>
                      Number(garden.capacityDc) + acc,
                    0
                  )
                  .toString()}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      {panels.map((panel) => (
        <DashboardPanel>
          <DashboardPanel.Title>{panel.title}</DashboardPanel.Title>
          <DashboardPanel.Action>
            <Link
              href="/gardens/[id]/subscribers"
              as={`/gardens/${1}/subscribers`}
            >
              View All
            </Link>
          </DashboardPanel.Action>

          <DashboardPanel.Body>
            <div>
              <p>Paragraph 1</p>
            </div>
          </DashboardPanel.Body>
        </DashboardPanel>
      ))}
    </div>
  )
}
