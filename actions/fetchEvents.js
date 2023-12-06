
export async function fetchEvents(page = 1) {
    const response = await fetch(`https://api.rawg.io/api/games?key=3b28d1804c3f4b79bc022ef696845c3a&page=${page}`)
    const events = await response.json();

    return events.results
}