import React, { useContext, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const handleLogin = async (data) => {
    await loginUser(data);
    navigate("/", { replace: true });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div className="grid">
      <div className="flex px-">
        <img src={logo} className="h-20 w-20 justify-start" alt="Logo" />
        <h1 className="font-Roboto font-extrabold text-2xl flex items-center justify-center w-full">
          Login
        </h1>
      </div>
      <div className="bg-gradient-to-r from-[#323225] to-[#575747] text-white mx-20 rounded-2xl font-Roboto">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="grid py-5 justify-center text-center"
        >
          <p className="text-white px-2">Email:</p>
          <input
            {...register("email", { required: true })}
            className="bg-slate-500 my-2 rounded-lg px-2 focus:outline-none"
          />
          <p className="text-white px-2">Password:</p>
          <input
            {...register("password", { required: true })}
            type="password"
            className="bg-slate-500 my-2 rounded-lg px-2 focus:outline-none"
          />
          <div className="flex justify-center">
            <button className="bg-white text-black rounded-md w-20 flex justify-center">
              Submit
            </button>
          </div>
          <p className="font-Roboto px-2 py-3">
            Dont have an account?{" "}
            <Link to={"/register"} className="underline">
              Create One
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
