import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community Solar Gardens",
  description: "Community Solar Billing",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const subscribers = await prisma.subscriber.findMany();

  return (
    <div className="p-4">
      <h1 className="text-3xl">Subscribers</h1>
      <Link className="btn btn-primary" href = {'/subscribers/create'}>New Subscriber</Link>
      <div className="flex flex-row">
        <ul className="menu">
          {subscribers.map((subscriber, index) => (
            <li key={index}>
              <Link href={`/subscribers/${subscriber.id}`}>{subscriber.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
}
