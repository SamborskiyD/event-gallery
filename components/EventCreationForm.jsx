"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Event Name is required"),
  type: yup
    .string()
    .required("Type is required"),
  city: yup
    .string()
    .required("City is required")
    .matches(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, "City should have correct name"), 
  cityAddress: yup
    .string()
    .required("Address is required"),
  date: yup.string().required("Date and time is required"),
  ticketPrice: yup.string().required("Ticket Price is required").matches(/^[0-9]*$/, "Ticket Price should contain only numbers"),
  maxTicketAmount: yup.string().required("Ticket Amount is required").matches(/^[0-9]*$/, "Ticket Amount should contain only numbers"),
  imageName: yup.string().required("Image Name is required"),
  description: yup.string().required("Description is required")
});

const EventCreationForm = ({createEvent}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const session = useSession();
  const router = useRouter()

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      organizerId: session?.data.user?.userDTO.uuid
    };

    const res = await createEvent(payload, session.data.user?.tokenPair.accessToken);
    console.log(res)
    router.push('/')
  };

  return (
    <form
      noValidate
      role="form"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondaryBlack p-6 flex flex-col justify-center gap-4 max-w-[600px] w-full rounded-lg"
    >
      <div>
        <label htmlFor="name" className="mb-2 block">
          Event Name
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
        <label htmlFor="cityAddress" className="mb-2 block">
          Address
        </label>
        <input
          type="text"
          id="cityAddress"
          className="input"
          {...register("cityAddress")}
        />
        {errors.cityAddress?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.cityAddress?.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="date" className="mb-2 block">
          Date and Time
        </label>
        <input
          type="datetime-local"
          id="date"
          min={new Date().toISOString().split(":", 2).join(":")}
          className="input"
          {...register("date")}
        />
        {errors.date?.message && (
          <p role="alert" className=" text-red-500 mt-2">
            {errors.date?.message}
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
          <label htmlFor="maxTicketAmount" className="mb-3 block">
            Tickets Amount
          </label>
          <input
            type="text"
            className="input"
            id="maxTicketAmount"
            {...register("maxTicketAmount")}
          />
          {errors.maxTicketAmount?.message && (
            <p role="alert" className=" text-red-500 mt-2">
              {errors.maxTicketAmount?.message}
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
        Create Event
      </button>
    </form>
  );
};

export default EventCreationForm;
