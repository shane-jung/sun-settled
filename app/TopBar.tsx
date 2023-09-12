"use client"
import { SignInButton } from "@/components/buttons"
import { Link } from "@/components/links"
import Image from "next/image"
{
  /* <div classNameName="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-between border-b border-slate-700 bg-opacity-90 shadow-sm backdrop-blur transition-all duration-100">
<div classNameName="gap-2px-4 sticky top-0  z-20 items-center py-4 ">
  <Link classNameName="mb-14 flex items-center pl-3" href={"/"}>
    <div classNameName="relative mr-1 h-8 w-8">
      <Image src="/logo.png" alt="logo" sizes="8rem" fill />
    </div>
    <h1 classNameName="text-2xl font-bold text-[#111827]">Sun Settled</h1>
  </Link>
</div>
<SignInButton />
</div> */
}

import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import {
  HomeIcon,
  LucideIcon,
  Receipt,
  ScrollText,
  Sun,
  Users,
} from "lucide-react"

const navigation: {
  name: string
  href: string
  icon: LucideIcon
  color: string
}[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
    color: "text-white-400",
  },
  {
    name: "Community Solar Gardens",
    href: "/gardens",
    icon: Sun,
    color: "text-yellow-500",
  },
  {
    name: "Subscribers",
    href: "/subscribers",
    icon: Users,
    color: "text-indigo-400",
  },
  {
    name: "Billing",
    href: "/billing",
    icon: Receipt,
    color: "text-green-500",
  },
  {
    name: "Invoices",
    href: "/invoices",
    icon: ScrollText,
    color: "text-red-400",
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <Disclosure as="nav" className="fixed z-20 w-full bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                Mobile menu button
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div> */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="Sun Settled"
                  />
                  <h1 className="text-2xl text-white">Sun Settled</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "flex flex-row rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                          item.color
                        )}
                        // aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames("mr-3 h-5 w-5", item.color)}
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  )
}
