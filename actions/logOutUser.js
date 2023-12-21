'use server'

import { getServerSession } from "next-auth";
import { authOptions } from '../configs/auth';

export async function logOutUser() {
    const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST

    const session = await getServerSession(authOptions)

    const response = await fetch(`${localhost}/api/auth/logout/${session.user.userDTO.uuid}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.user.tokenPair.accessToken}`
        },
    })
}