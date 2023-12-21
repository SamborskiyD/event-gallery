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
  cvv: yup
    .string()
    .required("CVV is required")
    .matches(/^[0-9]*$/, "CVV should contain only numbers")
    .min(3)
    .max(4),
});

const EventCreationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const session = useSession();

  const onSubmit = async (data) => {
    const payload = {
      userFirstName: data.firstName,
      userLastName: data.lastName,
      userEmail: data.email,
      eventUuid: eventUuid,
    };

    const res = await buyTicket(payload);
  };

  return (
    <form
      role="form"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondaryBlack p-6 flex flex-col justify-center gap-4 max-w-[600px] w-full rounded-lg"
    >
      <div>
        <label htmlFor="name" className="mb-2 block">
          Name
        </label>
        <input type="text" id="name" className="input" {...register("name")} />
        {errors.name?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.name?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="type" className="mb-2 block">
          Type
        </label>
        <select
          defaultValue={""}
          id="type"
          className="input"
          {...register("type")}
        >
          <option value="" disabled hidden></option>
          <option value="CONCERT">Concert</option>
          <option value="STAND_UP">Stand Up</option>
          <option value="PERFORMANCE">Performance</option>
        </select>
        {errors.type?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.type?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="city" className="mb-2 block">
          City
        </label>
        <input type="text" id="city" className="input" {...register("city")} />
        {errors.city?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.city?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="mb-2 block">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="input"
          {...register("address")}
        />
        {errors.address?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.address?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="datetime" className="mb-2 block">
          Date and Time
        </label>
        <input
          type="datetime-local"
          id="datetime"
          className="input"
          {...register("datetime")}
        />
        {errors.datetime?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.datetime?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">

        <div className="w-full">
          <label htmlFor="ticketPrice" className="mb-3 block">
            Ticket Price
          </label>
          <input
            type="text"
            className="input"
            id="ticketPrice"
            {...register("ticketPrice")}
          />
          {errors.ticketPrice?.message && (
            <p role="alert" className=" text-red-500 mt-2">
              {errors.ticketPrice?.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="ticketAmount" className="mb-3 block">
            Tickets Amount
          </label>
          <input
            type="text"
            className="input"
            id="ticketAmount"
            {...register("ticketAmount")}
          />
          {errors.ticketAmount?.message && (
            <p role="alert" className=" text-red-500 mt-2">
              {errors.ticketAmount?.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="imageName" className="mb-2 block">
          Image Name
        </label>
        <input
          type="text"
          id="imageName"
          className="input"
          {...register("imageName")}
        />
        {errors.imageName?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.imageName?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block">
          Desctiption
        </label>
        <textarea
          id="description"
          className="input"
          {...register("description")}
        />
        {errors.description?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.description?.message}
          </p>
        )}
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

export default EventCreationForm;
