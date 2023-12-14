
export async function refreshAccessToken(refreshToken) {
    const localhost = process.env.API_LOCALHOST

    const response = await fetch(`${localhost}/api/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            refreshToken: refreshToken
        }),
    })
    const accessToken = await response.json();

    return accessToken
}