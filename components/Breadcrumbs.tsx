import Link from "next/link"
import { HiHome } from "react-icons/hi2"

export default function Breadcrumbs({ items }: any) {
  return (
    <div className="breadcrumbs">
      <li>
        <Link href="/">
          <HiHome />
          Home
        </Link>
      </li>
      {items.map((item: any) => (
        <li key={item.href}>
          <Link href="/">
            {item.icon}
            {item.label}
          </Link>
        </li>
      ))}
    </div>
  )
}
