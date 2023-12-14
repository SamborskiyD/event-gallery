"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string()
  .required('Password is required')
  .min(8, 'Password should contain 8 or more characters')
  .matches(/^[A-Za-z0-9]*$/, 'Password should contain only Latin letters and numbers'),
})

const Login = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  
  const onSubmit = async (data) => {

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (res && !res.error) router.push('/profile')
    else console.log(res)

  };

  return (
    <section className="w-full flex justify-center">
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
            type="text"
            id="email"
            className="input invalid:border-2 invalid:border-red-500"
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
