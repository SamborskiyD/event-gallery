
export async function buyTicket(data) {
    const localhost = process.env.API_LOCALHOST
    const response = await fetch(`${localhost}/api/ticket`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const ticketId = await response.json();

    return ticketId
}