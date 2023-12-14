
import Ticket from "@/components/Ticket"
import { getTicketsByUserId } from "@/actions/getTicketsByUserId"
import { getUserById } from "@/actions/getUserById"

export default async function Profile({searchParams}) {

    // const tickets = await getTicketsByUserId(searchParams.userId)
    // const userData = await getUserById(searchParams.usetId)

    return (
        <section>
            <h2 className=" text-4xl font-semibold mb-4">About</h2>

            <ul className="mb-8 flex flex-col gap-4">
                <li className="text-xl flex gap-3 items-start">
                    First name
                </li>
                <li className="text-xl flex gap-3 items-start">
                    Last name
                </li>
                <li className="text-xl flex gap-3 items-start">
                    Email
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