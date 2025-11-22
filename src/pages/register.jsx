import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "../components/navbar.jsx";
import { auth, createUserWithEmailAndPassword } from "../firebase/config.js";
import { AuthContext } from "../context/authContext.jsx";

const Register = () => {
  const { setUser } = useContext(AuthContext);

  const formSchema = yup.object({
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmitHandle = (data) => {
    console.log(data);
  };

  const submitHandler = (data) => {
    formSubmitHandle(data);
    signupHandler(data);
  };

  const signupHandler = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log("Signup...");
          setUser(user);
        }
      );
    } catch (error) {
      console.error("SignUp Error!", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-gray-400 flex justify-center items-center px-4">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-xl font-semibold text-center mb-4">Register</h1>

          <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
