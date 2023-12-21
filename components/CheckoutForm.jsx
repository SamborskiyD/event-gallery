"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("First Name is required")
    .matches(/^[A-Za-z]*$/, "First Name should contain only Latin letters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .matches(/^[A-Za-z]*$/, "Last Name should contain only Latin letters"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  card: yup
    .string()
    .required("Card number is required")
    .matches(/^[0-9]*$/, "Card number should contain only numbers")
    .max(16, "Card number should have 16 sumbols or less"),
  expiryDate: yup.string().required("Expiry Date is required"),
  cvv: yup.string().required("CVV is required").matches(/^[0-9]*$/, "CVV should contain only numbers").min(3).max(4),
});

const CheckoutForm = ({ buyTicket, setPurchased, eventUuid, setTicket }) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const session = useSession();

  if (session?.status === "authenticated") {
    setValue("firstName", session.data.user?.userDTO.firstName);
    setValue("email", session.data.user?.userDTO.email);
    setValue("lastName", session.data.user?.userDTO.lastName);
  }

  const onSubmit = async (data) => {
    const payload = {
      userFirstName: data.firstName,
      userLastName: data.lastName,
      userEmail: data.email,
      eventUuid: eventUuid,
    };

    const res = await buyTicket(payload);

    setTimeout(() => {
      setTicket(res);
      setPurchased(true);
    }, 3000);
  };

  return (
    <form
      role="form"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondaryBlack p-6 flex flex-col justify-center gap-4 max-w-[600px] w-full rounded-lg"
    >
      {session?.status === "unauthenticated" && (
        <>
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
              {errors.firstName?.message && (
                <p role="alert" className=" text-red-500 mt-2">
                  {errors.firstName?.message}
                </p>
              )}
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
              {errors.lastName?.message && (
                <p role="alert" className=" text-red-500 mt-2">
                  {errors.lastName?.message}
                </p>
              )}
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
            {errors.email?.message && (
              <p role="alert" className=" text-red-500 mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
        </>
      )}

      <div>
        <label htmlFor="card" className="mb-2 block">
          Card number
        </label>
        <input type="text" className="input" id="card" {...register("card")} />
        {errors.card?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.card?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full">
          <label htmlFor="expiryDate" className="mb-3 block">
            Expiry Date
          </label>
          <input
            role="date"
            type="month"
            className="input"
            id="expiryDate"
            min={new Date()
              .toISOString()
              .split("-")[0]
              .concat("-", new Date().toISOString().split("-")[1])}
            {...register("expiryDate")}
          />
          {errors.expiryDate?.message && (
            <p role="alert" className=" text-red-500 mt-2">
              {errors.expiryDate?.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="cvv" className="mb-3 block">
            CVV
          </label>
          <input type="text" className="input" id="cvv" {...register("cvv")} />
          {errors.cvv?.message && (
            <p role="alert" className=" text-red-500 mt-2">
              {errors.cvv?.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="orangeButton transition-color duration-300"
      >
        Buy Ticket
      </button>
    </form>
  );
};

export default CheckoutForm;
