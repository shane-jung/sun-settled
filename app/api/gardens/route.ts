import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function PUT(request: Request){
    const data = await request.json();
    console.log(data)
    return new NextResponse(JSON.stringify(data), {
        headers: {
            'content-type': 'application/json'
        }
    })
    const garden = await prisma.garden.update({
        where: {
            id : data.id
        },
        data
    })


    
}


export async function POST(request: Request){
    const data = await request.json();
    console.log(data)

    const garden = await prisma.garden.create({
        data : {
            ...data,
            slug: data.name.toLowerCase().replace(/ /g, '-')
        }
    })

    return new NextResponse(JSON.stringify(garden), {
        headers: {
            'content-type': 'application/json'
        }
    })
}

