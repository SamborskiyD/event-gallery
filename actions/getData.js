
export async function getData(url) {
    const localhost = process.env.API_LOCALHOST
    const response = await fetch(localhost + url)
    const data = await response.json();

    return data
}