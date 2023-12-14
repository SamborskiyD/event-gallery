
export async function getTicketsByUserId(userId) {
    const localhost = process.env.API_LOCALHOST
    const response = await fetch(`${localhost}/api/ticket?ownerUuid=${userId}`)
    const tickets = await response.json();

    return tickets
}