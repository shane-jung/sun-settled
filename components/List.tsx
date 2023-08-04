"use client"
import { StyledLink } from "./links"

export default function List({
  pathName,
  items,
  children,
}: {
  children?: any
  pathName: string
  items: { name: string; id: string }[]
}) {
  return (
    <div className="flex h-full w-80 flex-col ">
      {items.map((item, index) => (
        <div key={index}>
          <StyledLink
            key={index}
            href={pathName + item.id}
            className={
              "block rounded border px-4 py-4 text-sm text-slate-800 transition hover:bg-indigo-500 hover:text-white  "
            }
          >
            {item.name}
          </StyledLink>
        </div>
      ))}
      {children}
    </div>
  )
}
