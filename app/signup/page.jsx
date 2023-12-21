'use client'

import { registerUser } from "../../actions/registerUser";
import SignUpForm from '../../components/SignUpForm'

const SignUpPage = () => {

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-6 font-semibold">Sign Up</h1>
      <SignUpForm registerUser={registerUser}/>
      <p className="mt-5">Already have an account? <a href="/login" className=" text-primaryOrange">Log In</a></p>

    </section>
  );
};

export default SignUpPage;
