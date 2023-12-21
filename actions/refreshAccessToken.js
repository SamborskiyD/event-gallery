

export async function refreshAccessToken(refreshToken) {
    const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST

    const response = await fetch(`${localhost}/api/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: refreshToken
    })
    const accessToken = await response.json();

    return accessToken
}