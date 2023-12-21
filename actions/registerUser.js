
export async function registerUser(data) {
    const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST
    const response = await fetch(`${localhost}/api/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const res = await response.json();

    return res
}