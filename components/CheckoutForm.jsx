import { yupResolver } from "@hookform/resolvers/yup";
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
  card: yup.string().required("Card number is required"),
  expiryDate: yup.string().required("Expiry Date is required"),
  cvv: yup.string().required("CVV is required"),
});

const CheckoutForm = ({ buyTicket, setPurchased, eventUuid }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      card: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      eventUuid: eventUuid,
    };

    const res = await buyTicket(payload);

    setTimeout(() => {
      setPurchased(true);
    }, 3000);
  };

  return (
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

      <div>
        <label htmlFor="card" className="mb-2 block">
          Card number
        </label>
        <input
          type="text"
          className="input"
          id="card"
          {...register("card")}
        />
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
