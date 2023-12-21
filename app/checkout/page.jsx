'use client';

import { useState } from "react";
import Image from "next/image";
import { buyTicket } from "../../actions/buyTicket";
import CheckoutForm from "../../components/CheckoutForm";


const CheckoutPage = ({initialPurchased = false, searchParams}) => {
  const [purchased, setPurchased] = useState(initialPurchased);
  const [ticket, setTicket] = useState('');

  return (
    <section className="w-full flex justify-center">
      {purchased ? (
        <div className="flex flex-col items-center">
          <Image src={'/hand-image.png'} width={500} height={400} />
          <h1 className=" text-center mt-10 mb-5 text-5xl text-primaryOrange font-semibold capitalize">Thank you for your purchase</h1>
          <a href="/" className=" text-lg text-center">Go to Homepage</a>
          <a href={`/ticket?ticketId=${ticket}`} className=" text-lg text-center">View Ticket</a>
        </div>
      ) : (
        <CheckoutForm buyTicket={buyTicket} setPurchased={setPurchased} setTicket={setTicket} eventUuid={searchParams.eventId}/>
      )}
    </section>
  );
};

export default CheckoutPage;
