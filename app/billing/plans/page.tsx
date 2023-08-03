import { SubscriptionPlan } from "@prisma/client"
import { Link, StyledLink } from "@/components/links"
import { Heading } from "@/components/typography"
import Table, { TableBody, TableHeader } from "@/components/Table"

export default async function Page() {
  const plans: SubscriptionPlan[] = await fetch(
    "http://localhost:3000/api/billing/plans",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json())
  console.log(plans)
  return (
    <>
      <Heading> Billing Plans Page </Heading>
      <div>
        <StyledLink
          href={"/billing/plans/create"}
          className="w-min whitespace-nowrap rounded bg-lime-500 text-white"
        >
          Create New Subscription Plan
        </StyledLink>

        <Table>
          <TableHeader>
            <tr>
              <th>Plan Name</th>
              <th>Description</th>
            </tr>
          </TableHeader>
          <TableBody>
            {plans.map((plan) => (
              <tr>
                <td>
                  <Link href={`/billing/plans/${plan.id}`}>{plan.name} </Link>
                </td>
                <td>{plan.description}</td>
              </tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
