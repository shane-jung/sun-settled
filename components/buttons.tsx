"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Link } from "./links"
import Image from "next/image"

export function SignInButton() {
  const { data: session, status } = useSession()
  if (status === "loading") return <>...</>
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
    )

  return (
    <button
      className="btn-secondary-outline btn btn-sm"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )
}

export function SignOutButton() {
  return (
    <button
      className="btn-secondary-outline btn btn-sm"
      onClick={() => signIn()}
    >
      Sign Out
    </button>
  )
}

export function Button({
  children,
  className,
  type,
  ...props
}: {
  children: React.ReactNode
  className?: string
  props?: any
  type: "button" | "submit" | "reset"
}) {
  return (
    <button
      type={type}
      className={`rounded bg-indigo-500 px-4 py-2 font-medium text-white transition hover:bg-indigo-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
