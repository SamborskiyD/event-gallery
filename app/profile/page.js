
import Ticket from "@/components/Ticket"
import { getTicketsByUserId } from "@/actions/getTicketsByUserId"
import { getServerSession } from "next-auth"
import { authOptions } from "@/configs/auth"

export default async function Profile() {

    const session = await getServerSession(authOptions)
    const tickets = await getTicketsByUserId(session?.user.uuid)

    return (
        <section>
            <h2 className=" text-4xl font-semibold mb-4">About</h2>

            <ul className="mb-8 flex flex-col gap-4">
                <li className="text-xl flex gap-3 items-start">
                    First name: {session?.user.firstName}
                </li>
                <li className="text-xl flex gap-3 items-start">
                    Last name: {session?.user.lastName}
                </li>
                <li className="text-xl flex gap-3 items-start">
                    Email: {session?.user.email}
                </li>
            </ul>

            <h2 className=" text-4xl font-semibold mb-4">Tickets</h2>
            {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {
                    tickets?.map((ticket) => (<Ticket {...ticket} />))
                }
            </div> */}
        </section>
    )
}