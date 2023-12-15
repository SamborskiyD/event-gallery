
export async function get(ticketId) {
    const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST
    const response = await fetch(`${localhost}/api/ticket/${ticketId}`)
    const ticket = await response.json();
    return ticket
}