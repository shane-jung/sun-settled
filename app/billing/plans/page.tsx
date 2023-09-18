import Link from "next/link"

export default function Page() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl">Plans</h2>
        <Link href="plans/create" className="btn btn-primary">
          Create New Plan
        </Link>
      </div>
    </div>
  )
}
