import Image from "next/image";

const Card = ({
  name,
  id,
  background_image,
  released,
  genres,
  rating,
  tags,
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
          <div>
            <p>Date: {released}</p>
            <p className="">Price: {rating}</p>
            <p>Address: </p>
          </div>
          <a href={`/events/${id}`} className="w-full bg-primaryOrange border-2 border-primaryOrange text-center text-lg p-2 rounded-lg hover:bg-primaryGrey hover:text-primaryOrange transition-color duration-300">Buy Ticket</a>
        </div>

        {/* <div className="m-4">
          <a href="#" className="block text-3xl group-hover:text-primaryOrange">
            {name}
          </a>
          <ul className="mt-2 hidden group-hover:block">
            <li className="border-b-2 py-2">Reliase Date: {released}</li>
            <li className="border-b-2 py-2">ID: {id}</li>
            <li className="border-b-2 py-2">
              Genres: {genres.map((genre) => genre.name).join(", ")}
            </li>
            <li className="py-2">
              Tags: {tags.map((tag) => tag.name).join(", ")}
            </li>
          </ul>
        </div>

        <span className="absolute bg-secondaryBlack text-primaryOrange font-bold text-md rounded-full py-1 px-3 top-3 left-3 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            />
          </svg>

          {rating}
        </span> */}
      </div>
    </div>
  );
};

export default Card;
