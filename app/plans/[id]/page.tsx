import { getAllGardens } from "@/lib/gardens"
import { getSubscriptionPlan } from "@/lib/plans"
import { getAllSubscribers } from "@/lib/subscribers"
import {
  Garden,
  GardenWithSubscribers,
  Subscriber,
  SubscriptionPlan,
} from "@/types"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {
  return <div>Hello</div>
}
// const plan: SubscriptionPlan = await getSubscriptionPlan({ id: params.id })

// const subscribers = await getAllSubscribers()

// const gardens: GardenWithSubscribers[] = await getAllGardens({
//   include: { subscribers: true },
// })

// const subscribersWithPlan = gardens.map((garden) => {
//   return garden.subscribers?.filter(
//     (subscriber: Subscriber) => subscriber.subscriptionPlanId === params.id
//   )
// })

// const subscriberAllocationWithPlan = subscribersWithPlan.reduce(
//   (acc: number, subscriber: Subscriber) => {
//     return Number(subscriber.allocation) + acc
//   },
//   0
// )

// return (
//   <div>
//     <div className="flex justify-between">
//       <h2 className="text-xl"> {name}</h2>
//       <Link href={`/billing/plans/${id}/edit`} className="btn">
//         Edit
//       </Link>
//     </div>
//     <div className="grid grid-cols-2 gap-6 mt-4">
//       <div className="panel col-span-2">
//         <h3 className="text-lg font-semibold">General</h3>
//         <div className="gap-x-6 gap-y-3 grid grid-cols-2 mt-2">
//           <div className="col-span-2">
//             <p className="font-medium">Description</p>
//             <p>{description ? description : "No description provided."}</p>
//           </div>

//           <div>
//             <p className="font-medium">Share Dependent</p>
//             <p>{isShareDependent ? "Yes" : "No"}</p>
//           </div>
//           <div>
//             <p className="font-medium">Production Dependent</p>
//             <p>{isProductionDependent ? "Yes" : "No"}</p>
//           </div>

//           <div>
//             <p className="font-medium">Starting Rate</p>
//             <p>${Number(rate).toFixed(2)}</p>
//           </div>

//           <div>
//             <p className="font-medium">Annual Rate Increase</p>
//             <p>{Number(rateIncrease).toFixed(2)}%</p>
//           </div>
//         </div>
//       </div>
//       <div className="panel">
//         <h3 className="text-lg font-medium">Subscribers on this Plan</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Subscriber Name</th>
//               <th>Allocation (kW)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {subscribers.map((subscriber: Subscriber) => (
//               <tr>
//                 <td>
//                   <Link
//                     href={`/subscribers/${subscriber.id}`}
//                     className="link"
//                   >
//                     {subscriber.name}
//                   </Link>
//                 </td>
//                 <td>{subscriber.allocation.toString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="panel ">
//         <h3 className="text-lg font-medium">Gardens</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Subscriber Name</th>
//               <th>Allocation (kW)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {gardens.map((garden: Garden) => (
//               <tr>
//                 <td>
//                   <Link href={`/subscribers/${garden.id}`} className="link">
//                     {garden.name}
//                   </Link>
//                 </td>
//                 <td>{garden.capacityDc.toString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
//   )
// }
