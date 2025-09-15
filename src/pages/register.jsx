import React, { useContext } from "react";
import { useRef } from "react";
import {auth,createUserWithEmailAndPassword} from "../firebase/config.js"
import { AuthContext } from "../context/authContext.jsx";

const Register = () => {
  let emailInput=useRef()
  let passInput=useRef()
  let confirmPass=useRef()
  let {user,setUser}=useContext(AuthContext)
  let signupHandler=async(e)=>{
    e.preventDefault()
    if(passInput.current.value != confirmPass.current.value){
      alert("Passwords don't match!")
      return
    }
    try {
     await createUserWithEmailAndPassword(auth, emailInput.current.value, passInput.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("Signup...")
    setUser(user)
    // ...
  })
    } catch (error) {
      console.error("SignUp Error!",error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-xl font-semibold text-center mb-4">Register</h1>

        <form className="space-y-4" onSubmit={signupHandler}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

          <input
            type="email"
            ref={emailInput}
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

          <input
            type="password"
            ref={passInput}
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPass}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

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
  );
};

export default Register;
