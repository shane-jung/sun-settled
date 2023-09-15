import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h2 className="text-2xl">Billing</h2>
      <p>
        Sun Settled simplifies the otherwise complicated process of billing for
        community solar gardens. We break the process into two pieces:
      </p>

      <div className="grid grid-cols-2 gap-20 px-32 mt-12">
        <div className="panel p-0">
          <h3 className="text-xl font-medium border-b-2 bg-gray-200 py-4 pl-4">
            Subscription Plans
          </h3>
          <div className="p-4">
            <p className="pb-4">
              A <span className="font-bold">subscription plan</span> defines how
              you calculate bills. In particular, each plan will define the rate
              at which subscribers are billed, and{" "}
              <span className="italic">how often </span> they are billed. You
              assign subscription plans to subscribers.
            </p>
            <p className="pb-4">
              For instance, you may have a plan called "Monthly Plan" that bills
              subscribers $100 per month. You may also have a plan called
              "Annual Plan" that bills subscribers $1,000 per year.
            </p>

            <Link className="btn" href={"/billing/plans"}>
              Subscription Plans
            </Link>
          </div>
        </div>
        <div className="panel p-0">
          <h2 className="text-xl font-medium border-b-2 bg-gray-200 py-4 pl-4">
            Billing Jobs
          </h2>
          <div className="p-4">
            <p className="pb-4">
              A <span className="font-bold">billing job</span> defines{" "}
              <span className="italic">who</span> is billed,{" "}
              <span className="italic">when</span> they're billed, and{" "}
              <span className="italic">for how long</span>. When you create a
              billing job, you'll specify which subscribers to bill.
            </p>
            <p className="pb-4">
              For example, you may create a billing job that bills all
              subscribers who belong to your garden called "Garden A", using the
              "Monthly Plan" subscription plan. You might specify that the
              billing job should run on the first of each month, and that it
              should bill subscribers for the next 12 months.
            </p>
            <Link
              className="btn inline-block mx-auto self-center"
              href={"/billing/jobs/create"}
            >
              Schedule New Billing Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
