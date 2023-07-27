import { prisma } from "@/lib/prisma"


interface Props {
    params: {
        slug : string
    }
}

export default async function Garden({ params } : Props){
    const garden = await prisma.garden.findUnique({
        where: {
            slug: params.slug
        }
    })

    return (
        <div>
            <h1 className = "text-2xl">{garden?.name}</h1>
            <p>Capacity DC: {garden?.capacityDc}</p>
            <ul>
                {garden?.subscribers?.map((subscriber, index) => (
                    <li key={index}>
                        {subscriber.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}