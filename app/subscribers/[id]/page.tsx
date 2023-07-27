import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const subscriber = await prisma.subscriber.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <div>
      <h2 className="text-3xl">{subscriber?.name}</h2>
      <p>{subscriber?.email}</p>

      <div className="overflow-x-auto">
        <h4 className="text-lg">Subscriber Allocation</h4>
        <table className="table border border-2">
          <thead>
            <tr className="bg-base-200">
              <th>Garden</th>
              <th>Allocation</th>
              <th>Plan</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>North High Community Solar Garden</td>
              <td>5.000 kW</td>
              <td>Pay As You Go</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
            <tr>
              <td>Emerge Second Chance</td>
              <td>7.000 kW</td>
              <td>Pay Up Front</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <h4 className="text-lg">Billing History</h4>
        <table className="table border border-2">
          <thead>
            <tr className="bg-base-200">
              <th>Invoice #</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INV-0000001</td>
              <td>$86.32</td>
              <td>April 21, 2023</td>

              <td>
                PENDING
              </td>
            </tr>
            <tr>
              <td>INV-0000005</td>
              <td>$12.02</td>
              <td>April 14, 2023</td>

              <td>
                PAID
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
