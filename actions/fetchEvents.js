
export async function fetchEvents(page = 1) {
    const key = process.env.NEXT_PUBLIC_APIKEY
    const response = await fetch(`https://api.rawg.io/api/games?key=${key}&page=${page}`)
    const events = await response.json();

    return events.results
}