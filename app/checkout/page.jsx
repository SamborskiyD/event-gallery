"use client";

import { useState } from "react";
import Image from "next/image";
import { buyTicket } from "@/actions/buyTicket";
import CheckoutForm from "@/components/CheckoutForm";


const CheckoutPage = ({initialState = false, searchParams}) => {
  const [purchased, setPurchased] = useState(initialState);

  return (
    <section className="w-full flex justify-center">
      {purchased ? (
        <div className="flex flex-col items-center">
          <Image src={'/hand-image.png'} width={500} height={400} />
          <h1 className=" text-center mt-10 mb-5 text-5xl text-primaryOrange font-semibold capitalize">Thank you for your purchase</h1>
          <a href="/" className=" text-lg text-center">Go to Homepage</a>
        </div>
      ) : (
        <CheckoutForm buyTicket={buyTicket} setPurchased={setPurchased} eventUuid={searchParams.eventId}/>
      )}
    </section>
  );
};

export default CheckoutPage;
