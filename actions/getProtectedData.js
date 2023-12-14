import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";
import { refreshAccessToken } from "./refreshAccessToken";

export async function getProtectedData(url) {
    const localhost = process.env.API_LOCALHOST

    const session = await getServerSession(authOptions);

    let res = await fetch(localhost + url, {
        method: "GET",
        headers: {
            Authorization: session?.user.accessToken,
        },
    });

    if (res.status == 401) {
        if (session) session.user.accessToken = await refreshAccessToken(session?.user.refreshToken ?? "");

        res = await fetch(localhost + url, {
            method: "GET",
            headers: {
                Authorization: session?.user.accessToken,
            },
        });

        return await res.json();
    }
    return await res.json();
}