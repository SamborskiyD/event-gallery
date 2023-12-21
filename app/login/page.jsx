'use client'

import LogInForm from "../../components/LogInForm";

const LogInPage = () => {

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-6 font-semibold">Log In</h1>
      <LogInForm />
      <p className="mt-5">Don't have an account yet? <a href="/signup" className=" text-primaryOrange">Sign Up</a></p>
    </section>
  );
};

export default LogInPage;
