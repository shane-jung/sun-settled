import List from "@/components/List"

export default function RouteLayout({
  children,
  items,
  label,
  pathName,
}: {
  children: React.ReactNode
  items: { name: string; id: string }[]
  label: string
  pathName: string
}) {
  return (
    <div className="">
      <div className="bg-white border-r-2 h-full fixed">
        <List pathName={pathName} items={items} />
      </div>
      <div className="h-full pl-[calc(250px+1rem)] pr-4 py-8 ">{children}</div>
    </div>
  )
}
