import { getServerSession } from "next-auth";
import { authOptions } from '@/configs/auth';
import { refreshAccessToken } from "./refreshAccessToken";

export async function getProtectedData(url) {
    const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST

    const session = await getServerSession(authOptions);

    let res = await fetch(localhost + url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${session?.user.tokenPair.accessToken}`
        },
    });

    if (res.status == 401) {
        if (session) session.user.accessToken = await refreshAccessToken(session?.user.tokenPair.refreshToken ?? "");

        res = await fetch(localhost + url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${session?.user.tokenPair.accessToken}`,
            },
        });

        return await res.json();
    }
    return await res.json();
}