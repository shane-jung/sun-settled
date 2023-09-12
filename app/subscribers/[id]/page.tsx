import Table, { TableBody, TableHeader } from "@/components/Table"
import { Link, StyledLink } from "@/components/links"
import { Heading, SubHeading } from "@/components/typography"
import { getSubscriber } from "@/lib/fetchData"
import { SubscriberWithRelations } from "@/types"

interface Props {
  params: {
    id: string
  }
}
export default async function Page({ params }: Props) {
  const subscriber: SubscriberWithRelations = await getSubscriber({
    id: params.id,
  })
  return (
    <div className="overflow-x-auto">
      <SubHeading>Subscriber Allocation</SubHeading>
      <Table className="w-full">
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
  )
}
