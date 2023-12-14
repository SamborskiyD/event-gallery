
export async function registerUser(data) {
    const localhost = process.env.API_LOCALHOST
    const response = await fetch(`${localhost}/api/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const tokenPair = await response.json();

    return tokenPair
}