
export async function getEventCities() {
    const localhost = process.env.NEXT_PUBLIC_LOCALHOST
    const response = await fetch(`${localhost}/api/event/cities`)
    const cities = await response.json();

    return cities
}