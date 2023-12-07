
export async function fetchEventById(id) {
    const key = process.env.NEXT_PUBLIC_APIKEY
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${key}`)
    const event = await response.json();

    return event
}