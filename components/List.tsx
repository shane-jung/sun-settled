"use client"
import { StyledLink } from "./links"

export default function List({
  pathName,
  items,
  children,
}: {
  children: any
  pathName: string
  items: { label: string; id: string }[]
}) {
  return (
    <div className="flex h-full w-80 flex-col ">
      {items.map((item, index) => (
        <div key={index}>
          <StyledLink
            key={index}
            href={pathName + item.id}
            className={
              "block border px-4 py-4 text-sm transition hover:bg-indigo-500 hover:text-white  "
            }
          >
            {item.label}
          </StyledLink>
        </div>
      ))}
      {children}
    </div>
  )
}
