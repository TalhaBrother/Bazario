import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-xl font-semibold text-center mb-4">Register</h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
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
