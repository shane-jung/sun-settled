export function Label({
  children,
  htmlFor,
}: {
  children?: React.ReactNode
  htmlFor: string
}) {
  return (
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
