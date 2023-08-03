import NextLink from "next/link"

export function Link({
  href,
  children,
  className,
  ...props
}: {
  href: string
  children: React.ReactNode
  className?: string
  props?: any
}) {
  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  )
}

export function StyledLink({
  href,
  children,
  className,
  ...props
}: {
  href: string
  children: React.ReactNode
  className?: string
  props?: any
}) {
  return (
    <Link href={href} className={`block p-2 pl-4  ${className}`}>
      {children}
    </Link>
  )
}
