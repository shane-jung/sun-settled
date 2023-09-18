import clsx from "clsx"

export default function Wrapper({
  error,
  children,
}: {
  error: boolean
  children?: React.ReactNode
}) {
  const base =
    "flex hover:bg-gray-50 focus-within:ring-2 transition rounded-lg w-full border justify-between items-center focus-within:border-blue-500 shadow-blue-200 focus-within:ring-blue-200"
  const errorColors = "ring-red-200 border-red-500 shadow-red-200"
  return <div className={clsx(error && errorColors, base)}>{children}</div>
}
