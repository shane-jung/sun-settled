export default function ErrorMessage({
  show,
  children,
}: {
  show: boolean
  children?: React.ReactNode
}) {
  if (!show) return null
  return <p className="text-red-500 text-xs mt-1">{children}</p>
}
