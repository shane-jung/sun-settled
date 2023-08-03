import NavMenu from "./NavMenu"

export default async function Layout({
  params,
  children,
}: {
  children: any
  params: {
    slug: string
  }
}) {
  const garden = await fetch(
    "http://localhost:3000/api/gardens?slug=" + params.slug
  ).then((res) => res.json())

  return (
    <div className="w-full">
      <h1 className="mb-1 p-4 text-2xl">{garden?.name}</h1>
      <div>
        <NavMenu />
        <div className="pl-4 pt-2">{children}</div>
      </div>
    </div>
  )
}
