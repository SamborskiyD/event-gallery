"use client";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondaryBlack p-6 flex flex-col justify-center gap-4 max-w-[600px] w-full rounded-lg"
      >
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="firstName" className="mb-3 block">
              First Name
            </label>
            <input
              type="text"
              className="input"
              id="firstName"
              {...register("firstName", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className="mb-3 block">
              Last Name
            </label>
            <input
              type="text"
              className="input"
              id="lastName"
              {...register("lastName", { required: true, maxLength: 80 })}
            />
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
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-2 block">
            Password
          </label>
          <input
            type="password"
            className="input"
            id="password"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm" className="mb-2 block">
            Confirm Password
          </label>
          <input
            type="password"
            className="input"
            id="passwordConfirm"
            {...register("passwordConfirm", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="orangeButton transition-color duration-300"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
