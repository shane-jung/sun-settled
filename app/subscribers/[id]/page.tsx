import { prisma } from "@/lib/prisma"
import Link from "next/link"

interface Props {
  params: {
    id: string
  }
}
export default async function Page({ params }: Props) {
  const subscriber = await fetch(
    "http://localhost:3000/api/subscribers?id=" + params.id
  ).then((res) => res.json())
  console.log(subscriber)
  return (
    <div className="pl-4">
      <h2 className="text-3xl">{subscriber?.name}</h2>
      <p>{subscriber?.email}</p>

      <div className="overflow-x-auto">
        <h4 className="text-lg">Subscriber Allocation</h4>
        <table className="table border">
          <thead>
            <tr className="bg-base-200">
              <th>Garden</th>
              <th>Allocation</th>
              <th>Plan</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link href={`/gardens/${subscriber?.gardenId!}`}>
                  North High Community Solar Garden
                </Link>
              </td>
              <td>{subscriber?.allocation} kW</td>
              <td>{subscriber?.paymentPlan}</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <h4 className="text-lg">Billing History</h4>
        <table className="table border">
          <thead>
            <tr className="bg-base-200">
              <th>Invoice #</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INV-0000001</td>
              <td>$86.32</td>
              <td>April 21, 2023</td>

              <td>PENDING</td>
            </tr>
            <tr>
              <td>INV-0000005</td>
              <td>$12.02</td>
              <td>April 14, 2023</td>

              <td>PAID</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
