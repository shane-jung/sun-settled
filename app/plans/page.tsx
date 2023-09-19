import DashboardPanel from "@/components/DashboardPanel"
import { getAllSubscriptionPlans } from "@/lib/plans"
import Link from "next/link"

export default async function Page() {
  const plans = await getAllSubscriptionPlans()
  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">Subscription Plans</h2>
      <Link
        href="plans/create"
        className="btn btn-primary absolute top-0 right-0 btn-sm"
      >
        Create New Plan
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {" "}
        <DashboardPanel className="col-span-1 lg:col-span-12">
          <DashboardPanel.Title>Overview</DashboardPanel.Title>
          <DashboardPanel.Body>
            <table className="table">
              <thead>
                <tr>
                  <th>Plan Name</th>
                  <th>Frequency</th>
                  <th>Rate</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.id}>
                    <td>
                      <Link href={`/plans/${plan.id}`}>{plan.name}</Link>
                    </td>
                    <td>{plan.billingFrequency}</td>
                    <td>{plan.rate}</td>
                    <td>
                      <Link href={`/plans/${plan.id}`}>View</Link>
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
