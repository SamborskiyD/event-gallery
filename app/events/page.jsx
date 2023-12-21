
import { getData } from "../../actions/getData";
import Image from "next/image";

const EventPage = async ({ searchParams }) => {
  const event = await getData(`/api/event/${searchParams.eventId}`);

  return (
    <section className="">
      <div className="flex flex-col md:flex-row md:gap-10">

        <Image
          width={1000}
          height={1000}
          quality={100}
          src={`/${event.imageName}`}
          className="object-cover md:max-w-[40%] h-[500px] rounded-lg bg-primaryOrange"
        />

        <div className="flex flex-col py-10 w-full">
          <h1 className=" text-6xl font-semibold mb-8">{event.name}</h1>

          <ul className="mb-8 flex flex-col gap-4">
            <li className="text-xl flex gap-3 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {event.city + ", " + event.cityAddress}
            </li>
            <li className="text-xl flex gap-3 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              {new Date(event.date).toLocaleString()}
            </li>
            <li className="text-xl flex gap-3 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
              {event.ticketPrice}&#8372;
            </li>
            <li className="text-xl flex gap-3 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
              {event.availableTicketAmount}
            </li>
          </ul>

          {
            event.availableTicketAmount > 0 ?
            (
              <a
            href={`/checkout?eventId=${event.uuid}`}
            className="orangeButton transition-color duration-300 md:w-[50%]"
          >
            Buy Ticket
          </a>
            ) : (
              <p className=" border-2 border-red-500 py-2 px-3 rounded-lg max-w-max text-red-500 text-2xl">Sold Out</p>
            )
          }

        </div>
      </div>

      <div className="md:mt-10">
        <h2 className=" text-4xl font-semibold mb-4">About</h2>
        <p role="description" className="text-lg">{event.description}</p>
      </div>
    </section>
  );
};

export default EventPage;
