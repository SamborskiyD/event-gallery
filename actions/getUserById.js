
export async function getUserById(userId) {
    const localhost = process.env.API_LOCALHOST
    const response = await fetch(`${localhost}/api/user/${userId}`)
    const user = await response.json();

    return user
}