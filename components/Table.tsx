export default function Table({
  children,
  className,
}: {
  children: any
  className?: string
}) {
  return <table className={"w-full border-2 text-left"}>{children}</table>
}

export function TableHeader({ children }: { children: any }) {
  return (
    <thead className="bg-base-200 border-b-2 text-xs font-bold text-gray-500  [&>tr>*]:px-4 [&>tr>*]:py-3 ">
      {children}
    </thead>
  )
}

export function TableBody({ children }: { children: any }) {
  return (
    <tbody className="text-left text-sm [&>tr>*]:border-b [&>tr>*]:px-4 [&>tr>*]:py-2">
      {children}
    </tbody>
  )
}
