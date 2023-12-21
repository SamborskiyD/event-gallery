import Image from "next/image";

const Card = ({
  name,
  uuid,
  imageName,
  date,
  type,
  ticketPrice,
  city
}) => {


  return (
    <div className="relative" role="card"> 
      <div className="group relative shadow-lg rounded-xl overflow-hidden text-primaryGrey hover:scale-110 transition-all duration-300">
        <Image
          width={500}
          height={500}
          src={`/${imageName}`}
          alt="poster"
          className="object-cover w-full h-96 bg-primaryOrange"
        />

        <div className="px-6 flex flex-col justify-between absolute top-0 w-full bg-secondaryBlack h-0 overflow-hidden group-hover:h-full group-hover:py-6 transition-all duration-500">
          <h1 className="text-2xl">{name}</h1>
          <ul>
            <li className=" capitalize">Type: {type}</li>
            <li className="">Price: {ticketPrice}&#8372;</li>
            <li>City: {city}</li>
            <li>Date: {new Date(date).toLocaleString()}</li>
          </ul>
          <a href={`/events?eventId=${uuid}`} aria-label="buy ticket" className="orangeButton transition-color duration-300">Buy Ticket</a>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
