
export async function createEvent(data, accessToken) {
    const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST

    const response = await fetch(`${localhost}/api/event`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
    })
    const eventId = await response.json();

    return eventId
}