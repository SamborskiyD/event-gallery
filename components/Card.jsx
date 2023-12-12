import Image from "next/image";

const Card = ({
  name,
  id,
  background_image,
  date,
  type,
  ticketPrice,
  city
}) => {
  return (
    <div className="relative">
      <div className="group relative shadow-lg rounded-xl overflow-hidden text-primaryGrey hover:scale-110 transition-all duration-300">
        <Image
          width={500}
          height={500}
          src={background_image}
          alt="poster"
          className="object-cover w-full h-96 bg-primaryOrange"
        />

        <div className="px-6 flex flex-col justify-between absolute top-0 w-full bg-secondaryBlack h-0 overflow-hidden group-hover:h-full group-hover:py-6 transition-all duration-500">
          <h1 className="text-2xl">{name}</h1>
          <ul>
            <li>Type: {type}</li>
            <li className="">Price: {ticketPrice}</li>
            <li>City: {city}</li>
            <li>Date {date}</li>
          </ul>
          <a href={`/events/${id}`} aria-label="buy ticket" className="orangeButton transition-color duration-300">Buy Ticket</a>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
