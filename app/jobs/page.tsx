import DashboardPanel from "@/components/DashboardPanel"
import { getAllBillingJobs } from "@/lib/jobs"
import { getAllSchedules } from "@/lib/schedules"
import Link from "next/link"

export default async function Page() {
  const jobs = await getAllBillingJobs()
  const schedules = await getAllSchedules({ state: "ENABLED" })
  console.log(schedules)

  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">Jobs</h2>
      <Link
        href="jobs/create"
        className="btn btn-primary absolute top-0 right-0 btn-sm"
      >
        Create New Billing Job
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <DashboardPanel className="col-span-1 lg:col-span-12">
          <DashboardPanel.Title>Overview</DashboardPanel.Title>
          <DashboardPanel.Body>
            <table className="table">
              <thead>
                <tr>
                  <th>Garden</th>
                  <th>Subscription Plan</th>
                  <th>Frequency</th>
                  <th>Rate</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td>
                      <Link href={`/jobs/${job.id}`}>{job.name}</Link>
                    </td>
                    <td>{job.gardenId}</td>
                    <td>{job.startDate.toString()}</td>
                    <td>
                      <Link href={`/jobs/${job.id}`}>View</Link>
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
