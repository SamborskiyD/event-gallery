"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should contain 8 or more characters")
    .matches(
      /^[A-Za-z0-9]*$/,
      "Password should contain only Latin letters and numbers"
    ),
});

const LogInForm = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {

    const payload = {
      email: data.email,
      password: data.password,
      redirect: false,
    }
    const res = await signIn('credentials', payload);

    if(res && !res.error) router.push('/profile')
    else console.log(res.error)

  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondaryBlack p-6 flex flex-col justify-center gap-4 max-w-[600px] w-full rounded-lg"
    >
      <div>
        <label htmlFor="email" className="mb-2 block">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input invalid:border-2 invalid:border-red-500"
          {...register("email")}
        />
        {errors.email?.message && <p className=" text-red-500 mt-2" role="alert">{errors.email?.message}</p>}
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block">
          Password
        </label>
        <input
          type="password"
          role="password"
          className="input"
          id="password"
          {...register("password")}
        />
        {errors.password?.message &&<p className=" text-red-500 mt-2" role="alert">{errors.password?.message}</p>}
      </div>
      <button
        type="submit"
        className="orangeButton transition-color duration-300"
      >
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
