import React from 'react'
import Link from 'react-router-dom'


const Login = () => {
  return (
    <div>
      <div className="w-full bg-pink-200 py-12 mx-auto flex items-center justify-center ">
        <div className="w-full bg-white max-w-md p-5 mx-auto py-6 border-1 border-gray-200 shadow-md">
          <h1 className="text-lg font-bold text-center text-gray-700">
            Login into your account!
          </h1>
          <form
            className="flex flex-col gap-5 mt-5 w-full"
          >
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Your password"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />

            <button className="bg-orange-600 text-white px-6 py-2 w-full cursor-pointer">
              Signin
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-orange-600 cursor-pointer">
              Register Here
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;

