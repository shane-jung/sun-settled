export default async function Garden({ params }: { params: { slug: string } }) {
  const garden = await fetch(
    "http://localhost:3000/api/gardens?slug=" + params.slug
  ).then((res) => res.json())

  return (
    <>
      <p>Capacity DC: {garden?.capacityDc.toString()}</p>
    </>
  )
}
