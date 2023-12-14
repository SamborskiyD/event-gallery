"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";

import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required").matches(/^[A-Za-z]*$/, 'First Name should contain only Latin letters'),
  lastName: yup.string().required("Last Name is required").matches(/^[A-Za-z]*$/, 'Last Name should contain only Latin letters'),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  card: yup.string().required("Card number is required"),
  expiryDate: yup.string().required("Expiry Date is required"),
  cvv: yup.string().required("CVV is required")
});

const CheckoutPage = () => {
  const [purchased, setPurchased] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    // ..... buyTicket post request
    setTimeout(() => {
      setPurchased(true);
    }, 3000);
  };

  return (
    <section className="w-full flex justify-center">
      {purchased ? (
        <div className="flex flex-col items-center">
          <Image src={'/hand-image.png'} width={500} height={400} />
          <h1 className=" text-center mt-10 mb-5 text-5xl text-primaryOrange font-semibold capitalize">Thank you for your purchase</h1>
          <a href="/" className=" text-lg text-center">Go to Homepage</a>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-secondaryBlack p-6 flex flex-col justify-center gap-4 max-w-[600px] w-full rounded-lg"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="firstName" className="mb-3 block">
                First Name
              </label>
              <input
                type="text"
                className="input"
                id="firstName"
                {...register("firstName")}
              />
              <p className=" text-red-500 mt-2">{errors.firstName?.message}</p>
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className="mb-3 block">
                Last Name
              </label>
              <input
                type="text"
                className="input"
                id="lastName"
                {...register("lastName")}
              />
              <p className=" text-red-500 mt-2">{errors.lastName?.message}</p>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="input"
              {...register("email")}
            />
            <p className=" text-red-500 mt-2">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="card" className="mb-2 block">
              Card number
            </label>
            <input
              type="string"
              className="input"
              id="card"
              {...register("card")}
            />
            <p className=" text-red-500 mt-2">{errors.card?.message}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="expiryDate" className="mb-3 block">
                Expiry Date
              </label>
              <input
                type="month"
                className="input"
                id="expiryDate"
                min={new Date()
                  .toISOString()
                  .split("-")[0]
                  .concat("-", new Date().toISOString().split("-")[1])}
                {...register("expiryDate")}
              />
              <p className=" text-red-500 mt-2">{errors.expiryDate?.message}</p>
            </div>
            <div className="w-full">
              <label htmlFor="cvv" className="mb-3 block">
                CVV
              </label>
              <input
                type="text"
                className="input"
                id="cvv"
                {...register("cvv")}
              />
              <p className=" text-red-500 mt-2">{errors.cvv?.message}</p>
            </div>
          </div>

          <button
            type="submit"
            className="orangeButton transition-color duration-300"
          >
            Buy Ticket
          </button>
        </form>
      )}
    </section>
  );
};

export default CheckoutPage;
