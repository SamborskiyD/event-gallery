
import Ticket from "@/components/Ticket"
import { getProtectedData } from "@/actions/getProtectedData"
import { getServerSession } from "next-auth"
import { authOptions } from "@/configs/auth"

export default async function Profile() {

    const session = await getServerSession(authOptions)
    const tickets = await getProtectedData(`/api/ticket?ownerId=${session?.user.userDTO.uuid}`)

    return (
        <section>
            <h2 className=" text-4xl font-semibold mb-4">About</h2>

            <ul className="mb-8 flex flex-col gap-4">
                <li className="text-xl flex gap-3 items-start">
                    First name: {session?.user.userDTO.firstName}
                </li>
                <li className="text-xl flex gap-3 items-start">
                    Last name: {session?.user.userDTO.lastName}
                </li>
                <li className="text-xl flex gap-3 items-start">
                    Email: {session?.user.userDTO.email}
                </li>
            </ul>

            <h2 className=" text-4xl font-semibold mb-4">Tickets</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                {
                    tickets?.map((ticket) => (<Ticket {...ticket} />))
                }
            </div>

            {
                session?.user.userDTO.role == 'ORGANIZER' && (
                    <>
                        <h2 className=" text-4xl font-semibold mb-4">Events</h2>
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        </div>
                        <a href="/events/add" className="orangeButton sm:max-w-[70%] md:max-w-[50%] xl:max-w-[30%]">
                            Add Event
                        </a>
                    </>
                )
            }
        </section>
    )
}