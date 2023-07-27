import { SignInButton } from "@/components/buttons";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Community Solar Gardens",
    path: "/gardens",
  },
  {
    name: "Subscribers",
    path: "/subscribers",
  },
];

export default function NavMenu() {
  return (
      <ul className="menu menu-md bg-base-200 w-56 rounded-box">
        <li className= "text-2xl"> 
            <Link href= {'/'} >Sun Settled</Link>
        </li>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
            <SignInButton />
        </li>
      </ul>
  );
}
