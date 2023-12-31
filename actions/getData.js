
export async function getData(url) {
    const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST
    const response = await fetch(localhost + url, {cache: 'no-store'})
    
    const data = await response.json();
    return data
}