
export async function getEventById(eventId) {
    const localhost = process.env.NEXT_PUBLIC_LOCALHOST
    const response = await fetch(`${localhost}/api/event/${eventId}`)
    const event = await response.json();

    return event
}