import GardenProduction from "@/components/GardenProduction"
import { GardenWithRelations, Subscriber } from "@/types"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"

export default async function Garden({ params }: { params: { id: string } }) {
  const garden: GardenWithRelations = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/gardens?id=${params.id}`,
    { next: { revalidate: 1 } }
  ).then((res) => res.json())

  const subscribers = garden?.subscribers
  // const invoices = garden?.invoices
  return (
    <div>
      <div className="mb-2 text-sm">
        <Link href="/gardens" className="link text-blue-700">
          Gardens /
        </Link>
        <span> {garden?.name}</span>
      </div>

      <h2 className="mb-4 text-2xl">{garden?.name}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded border-2 bg-white p-4 shadow-md">
          <h3 className="mb-2 text-xl font-medium">General</h3>
          <div className="flex">
            <h4 className="wrap text-center text-3xl">
              {garden?.capacityDc.toString()}
              <br />
              kW
            </h4>
            <Image
              src={"/capacity.png"}
              alt="Solar Panel Image"
              width={64}
              height={64}
            />
          </div>
        </div>
        <div className="rounded border-2 bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h3 className="mb-2 text-xl font-medium">Subscribers</h3>
            <Link
              href="/gardens/[id]/subscribers"
              as={`/gardens/${params.id}/subscribers`}
              className="link"
            >
              View All
            </Link>
          </div>
          <table>
            <thead className="text-left">
              <tr>
                <th>Subscriber Name</th>
                <th>Allocation (kW)</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber: Subscriber) => (
                <tr>
                  <td>
                    <Link
                      href={`/subscribers/${subscriber.id}`}
                      className="link "
                    >
                      {subscriber.name}
                    </Link>
                  </td>
                  <td>{subscriber.allocation.toString()}</td>
                  <td>
                    <Link
                      href={`/subscribers/${subscriber.id}`}
                      className="link"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              )) || <Skeleton />}
            </tbody>
          </table>
        </div>

        <div className="h-96 relative rounded border-2 bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <h3 className="mb-2 text-xl font-medium">Production History</h3>
            <Link href={`${garden.id}/production`} className="btn text-sm">
              Add Reading
            </Link>
          </div>
          <GardenProduction garden={garden} />
        </div>

        <div className="rounded border-2 bg-white p-4 shadow-md">
          <h3 className="mb-2 text-xl font-medium">Invoices</h3>
          <table>
            <thead className="text-left">
              <tr>
                <th>Invoice Name</th>
                <th>Amount Due</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber: Subscriber) => (
                <tr>
                  <td>
                    <Link
                      href={`/subscribers/${subscriber.id}`}
                      className="link "
                    >
                      {subscriber.name}
                    </Link>
                  </td>
                  <td>{subscriber.allocation.toString()}</td>
                  <td>
                    <Link
                      href={`/subscribers/${subscriber.id}`}
                      className="link"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
