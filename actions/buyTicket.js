import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";


export async function buyTicket(data) {
    const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST
    const session = await getServerSession(authOptions);

    const response = await fetch(`${localhost}/api/ticket`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": session?.user.accessToken,
        },
        body: JSON.stringify(data),
    })
    const ticketId = await response.json();

    return ticketId
}