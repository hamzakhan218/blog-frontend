import React from "react";
import logo from "../../assets/logo.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Register() {
  const { register, handleSubmit } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className="grid">
      <div className="flex px-">
        <img src={logo} className="h-20 w-20 justify-start" alt="Logo" />
        <h1 className="font-Roboto font-extrabold text-2xl flex items-center justify-center w-full">
          Register
        </h1>
      </div>
      <div className="bg-gradient-to-r from-[#323225] to-[#575747] text-white mx-20 rounded-2xl">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="grid py-5 justify-center text-center"
        >
          <p className="text-white px-2">Name:</p>
          <input
            {...register("name", { required: true })}
            className="bg-slate-500 focus:outline-none my-2 rounded-lg px-2"
          />
          <p className="text-white px-2">Email:</p>
          <input
            {...register("email", { required: true })}
            className="bg-slate-500 focus:outline-none my-2 rounded-lg px-2"
          />
          <p className="text-white px-2">Password:</p>
          <input
            {...register("password", { required: true })}
            type="password"
            className="bg-slate-500 focus:outline-none my-2 rounded-lg px-2"
          />
          <div className="flex justify-center">
            <button className="bg-white text-black rounded-md w-20 flex justify-center">
              Submit
            </button>
          </div>
          <p className="font-Roboto px-2 py-3">
            Already have an account?{" "}
            <Link to={"/login"} className="underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
