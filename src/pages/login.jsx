import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRef } from "react";
import {auth,signInWithEmailAndPassword} from "../firebase/config.js"
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../context/authContext.jsx";

const Login = () => {
  // let emailInput=useRef()
  // let passInput=useRef()

  let {setUser}=useContext(AuthContext)
  let navigate=useNavigate()
   const formSchema=yup.object({
      email:yup.string().required("Email is required").email("Invalid email format"),
      password:yup.string().required("Password is required").min(6,"Password must be at least 6 characters"),
     
    })
     const {
        register,
        handleSubmit,
        formState:{errors}
      }=useForm({resolver:yupResolver(formSchema)})
      
        let formSubmitHandle=(data)=>{
    console.log(data)
  }
  const submitHandler = (data) => {

    formSubmitHandle(data)
    loginHandler(data)
  }
  let loginHandler=async(data)=>{
    // e.preventDefault()
    try {
     await signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Logging in...")
    setUser(user)
    navigate("/")
    // ...
  })
    } catch (error) {
      console.error("Login Error!",error)
    }
  }
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-xl font-semibold text-center mb-4">Login</h1>

        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          {/* Email */}
          <input
            type="email"
            // ref={emailInput}
            placeholder="Email" {...register("email")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />
             {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          {/* Password */}
          <input
            type="password"
            // ref={passInput}
            placeholder="Password"  {...register("password")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />
          {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
