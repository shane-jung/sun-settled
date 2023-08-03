import Table, { TableBody, TableHeader } from "@/components/Table"
import { Link, StyledLink } from "@/components/links"
import { Heading, SubHeading } from "@/components/typography"
import { SubscriberWithRelations } from "@/types"

interface Props {
  params: {
    id: string
  }
}
export default async function Page({ params }: Props) {
  const subscriber: SubscriberWithRelations = await fetch(
    "http://localhost:3000/api/subscribers?id=" + params.id,
    { next: { revalidate: 1 } }
  ).then((res) => res.json())
  return (
    <div className="pl-4">
      <SubHeading className="text-2xl">{subscriber?.name}</SubHeading>
      <p className="text-sm">{subscriber?.email}</p>

      <div className="overflow-x-auto">
        <SubHeading>Subscriber Allocation</SubHeading>
        <Table>
          <TableHeader>
            <tr>
              <th>Garden</th>
              <th>Allocation</th>
              <th>Plan</th>
              <th></th>
            </tr>
          </TableHeader>
          <TableBody>
            <tr>
              <td>
                <Link href={`/gardens/${subscriber?.gardenId!}`}>
                  North High Community Solar Garden
                </Link>
              </td>
              <td>{subscriber?.allocation.toString()} kW</td>
              <td>{subscriber?.paymentPlan}</td>
              <td>
                <button className="">Details</button>
              </td>
            </tr>
          </TableBody>
        </Table>
      </div>
      <div className="overflow-x-auto">
        <SubHeading>Billing History</SubHeading>
        <Table>
          <TableHeader>
            <tr>
              <th>Invoice #</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </TableHeader>
          <TableBody>
            {subscriber.invoices.map((invoice) => (
              <tr>
                <td>{invoice.name}</td>
                <td>$12.02</td>
                <td>April 14, 2023</td>

                <td>PAID</td>
              </tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
