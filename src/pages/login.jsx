import React, { useContext } from "react";
import { useRef } from "react";
import {auth,signInWithEmailAndPassword} from "../firebase/config.js"
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../context/authContext.jsx";

const Login = () => {
  let emailInput=useRef()
  let passInput=useRef()
  let {setUser}=useContext(AuthContext)
  let navigate=useNavigate()
  let loginHandler=async(e)=>{
    e.preventDefault()
    try {
     await signInWithEmailAndPassword(auth, emailInput.current.value, passInput.current.value)
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

        <form className="space-y-4" onSubmit={loginHandler}>
          {/* Email */}
          <input
            type="email"
            ref={emailInput}
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            ref={passInput}
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

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
