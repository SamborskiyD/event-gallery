
export async function get(ticketId) {
    const localhost = process.env.API_LOCALHOST
    const response = await fetch(`${localhost}/api/ticket/${ticketId}`)
    const ticket = await response.json();
    return ticket
}