export default async function Garden({ params }: { params: { id: string } }) {
  const garden = await fetch(
    "http://localhost:3000/api/gardens?id=" + params.id,
    { next: { revalidate: 1 } }
  ).then((res) => res.json())
  console.log(garden)

  return <p>Capacity DC: {garden?.capacityDc.toString()}</p>
}
