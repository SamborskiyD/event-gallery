
export async function getEvents(page = 0, types = '', date, city) {
    const localhost = process.env.NEXT_PUBLIC_LOCALHOST

    const response = await fetch(`${localhost}/api/event?page=${page}&types=${types}
        ${date !== '' ? '&date=' + date : ''}
        ${city !== '' ? '&city=' + city : ''}`)

    const events = await response.json();

    return events
}