"use client"

import { Disclosure, Menu, Transition } from "@headlessui/react"
import {
  HomeIcon,
  LucideIcon,
  Receipt,
  ScrollText,
  Sun,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Fragment } from "react"

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
    color: "text-yellow-300",
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
    color: "text-green-400",
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
                      <Link
                        key={item.href}
                        href={item.href}
                        className={classNames(
                          "transition flex flex-row whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-blue-400",
                          item.color
                        )}
                      >
                        <item.icon className={classNames("mr-3 h-5 w-5")} />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button
                      id={"1"}
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
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
        </>
      )}
    </Disclosure>
  )
}
