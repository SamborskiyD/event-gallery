"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string()
  .required('Password is required')
  .min(8, 'Password should contain 8 or more characters')
  .matches(/^[A-Za-z0-9]*$/, 'Password should contain only Latin letters and numbers')
  .oneOf([yup.ref('passwordConfirm'), null], 'Passwords should match'),
  passwordConfirm: yup.string().required('Please confirm your password').oneOf([yup.ref('password'), null], 'Passwords should match')
  
})

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full flex justify-center">
      <form
        method="post"
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
          <label htmlFor="password" className="mb-2 block">
            Password
          </label>
          <input
            type="password"
            className="input"
            id="password"
            {...register("password")}
          />
          <p className=" text-red-500 mt-2">{errors.password?.message}</p>
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
          <p className=" text-red-500 mt-2">{errors.passwordConfirm?.message}</p>
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
