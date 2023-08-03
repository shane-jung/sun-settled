import { twJoin } from "tailwind-merge"
export function Heading({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  props?: any
}) {
  return (
    <h1 className={twJoin("mb-4 pb-2 text-3xl", className)} {...props}>
      {children}
    </h1>
  )
}

export function SubHeading({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  props?: any
}) {
  return (
    <h2 className={twJoin("py-2 text-xl font-medium", className)} {...props}>
      {children}
    </h2>
  )
}
