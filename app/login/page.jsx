"use client";

import { useForm } from "react-hook-form";

const Login = () => {
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
        <button
          type="submit"
          className="orangeButton transition-color duration-300"
        >
          Log In
        </button>
      </form>
    </section>
  );
};

export default Login;
