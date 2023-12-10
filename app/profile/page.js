
export default function Profile() {
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
            <div className="grid grid-cols-2">

            </div>
        </section>
    )
}