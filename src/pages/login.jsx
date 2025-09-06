import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-xl font-semibold text-center mb-4">Login</h1>

        <form className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          />

          {/* Password */}
          <input
            type="password"
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
