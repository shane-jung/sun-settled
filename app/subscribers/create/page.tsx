import { prisma } from "@/lib/prisma";
import SubscriberForm from "./SubscriberForm";

export default async function Page(){
    const gardens = await prisma.garden.findMany();
    return (
        <SubscriberForm gardens = {gardens}/>
    )
}