import BillingJobForm from "./BillingJobForm"

export default async function Page() {
  const gardens = await fetch("http://localhost:3000/api/gardens").then((res) =>
    res.json()
  )
  const plans = await fetch("http://localhost:3000/api/billing/plans").then(
    (res) => res.json()
  )
  return (
    <div>
      <BillingJobForm gardens={gardens} plans={plans} />
    </div>
  )
}
