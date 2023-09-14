import { Garden } from "@/types"
import { Metadata } from "next"
import Link from "next/link"

// const tempGardens = ["North", "Emerge"];

export const metadata: Metadata = {
  title: "Community Solar Gardens | Sun Settled",
}

export default async function Page() {
  const gardens: Garden[] = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gardens`)
  ).json()
  console.log(gardens)
  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
      <h3 className="mb-4 text-2xl">Gardens</h3>
      <Link
        href="/gardens/create"
        className="btn absolute right-0 top-0 text-sm"
      >
        Create New Garden
      </Link>
      <div className="col-span-2 rounded border-2 bg-white p-4 shadow-md">
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
      <div className="rounded border-2 bg-white p-4 shadow-md">
        <h3 className="mb-2 text-xl font-bold">Production</h3>
      </div>
      <div className="rounded border-2 bg-white p-4 shadow-md">
        <h3 className="mb-2 text-xl font-bold">Scheduled Payments</h3>
      </div>
      <div className="rounded border-2 bg-white p-4 shadow-md">
        <h3 className="mb-2 text-xl font-bold">Todo</h3>
      </div>
    </div>
  )
}
