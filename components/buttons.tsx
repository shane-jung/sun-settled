"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function SignInButton() {
  const { data: session, status } = useSession();
  if (status === "loading") return <>...</>;
  else if (status === "authenticated")
    return (
      <div className="flex flex-row items-center px-4">
        <Link href={"/"}>
          <Image
            src={session.user?.image ?? ""}
            width={32}
            height={32}
            alt={session.user?.name ?? "User Image"}
            className="rounded-full"
          />
        </Link>
        <SignOutButton />
      </div>
    );

  return (
    <button className="btn btn-secondary-outline btn-sm" onClick={() => signIn()}>Sign In</button>
  );
}

export function SignOutButton() {
  return (
    <button className="btn btn-secondary-outline btn-sm" onClick={() => signIn()}>Sign Out</button>
  );
}
