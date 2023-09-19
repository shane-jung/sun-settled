export function Label({
  children,
  htmlFor,
}: {
  children?: React.ReactNode
  htmlFor: string
}) {
  return (
    <label className="label label-text font-medium" htmlFor={htmlFor}>
      {children}
    </label>
  )
}
