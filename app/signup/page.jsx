'use client'

import { registerUser } from "@/actions/registerUser";
import SignUpForm from '../../components/SignUpForm'

const SignUpPage = () => {

  return (
    <section className="w-full flex justify-center">
      <SignUpForm registerUser={registerUser}/>
    </section>
  );
};

export default SignUpPage;
