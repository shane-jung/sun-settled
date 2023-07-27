import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community Solar Gardens",
  description: "Community Solar Billing",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gardens = await prisma.garden.findMany();

  return (
    <div className="p-4">
      <h1 className="text-3xl px-3">Gardens</h1>
      <Link className="btn btn-primary" href={"/gardens/create"}>
        Add a Garden
      </Link>
      <div className="flex flex-row gap-6">
        <ul className="menu">
          {gardens.map((garden, index) => (
            <li key={index}>
              <Link href={"/gardens/" + garden.slug}>{garden.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
}
