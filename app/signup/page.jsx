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
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="input"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          className="input"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          className="input"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          {...register("Email", { required: true })}
        />
        <input
          type="password"
          className="input"
          placeholder="Confirm password"
          {...register("Email", { required: true })}
        />

        <button type="submit" className="orangeButton transition-color duration-300">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
