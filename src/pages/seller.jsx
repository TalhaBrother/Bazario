import React from "react";
import Navbar from "../components/navbar.jsx";

const Seller = () => {
  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-slate-100 flex justify-center items-center px-4">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-xl font-semibold text-center mb-4 text-slate-900">
            Become a Seller
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 
                         focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="text"
              placeholder="Business Name"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 
                         focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 
                         focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 
                         focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="text"
              placeholder="Business Address"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 
                         focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 
                         focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 
                         focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 text-white font-medium 
                         hover:bg-blue-700 transition"
            >
              Register as Seller
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-slate-600">
            Already a seller?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Seller;
