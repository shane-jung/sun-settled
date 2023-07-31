import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h1 className="w-full border-b-2 pb-4 pl-3 text-3xl">Billing</h1>

      <Link
        className="m-2 block w-60 rounded-md border p-3 transition hover:bg-slate-100"
        href={"/billing/jobs/create"}
      >
        Schedule New Billing Job
      </Link>
    </div>
  )
}
