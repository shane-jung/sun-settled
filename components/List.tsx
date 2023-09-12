"use client"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()
  return (
    // <div className="flex h-full min-w-[20rem] flex-col overflow-y-scroll transition duration-1000">
    //   {items.map((item, index) => (
    //     <div key={index}>
    //       <StyledLink
    //         key={index}
    //         href={pathName + item.id}
    //         className={
    //           "text-md block border border-gray-300 px-3 py-3 text-black transition hover:bg-blue-900 hover:text-white " +
    //           (pathName + item.id === pathname ? "bg-blue-900 text-white" : "")
    //         }
    //       >
    //         {item.name}
    //       </StyledLink>
    //     </div>
    //   ))}
    //   {children}
    // </div>
    <ul role="list" className="min-w-[250px] divide-y divide-gray-100">
      {items.map((item) => (
        <li key={item.name} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <a
              className="min-w-0 flex-auto text-gray-900 hover:text-indigo-800"
              href={pathName + item.id}
            >
              <p className="text-sm font-semibold leading-6 ">{item.name}</p>
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}
