'use client'

import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => console.log(data);
  

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          className='input'
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type='password'
          className='input'
          placeholder="Password"
          {...register("Email", { required: true})}
        />

        <button type="submit" className="orangeButton transition-color duration-300">Log In</button>
      </form>
    </section>
  );
};

export default Login;
