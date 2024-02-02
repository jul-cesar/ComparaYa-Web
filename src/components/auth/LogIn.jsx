import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase-auth";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, redirect } from "react-router-dom";
const LogIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div class="flex flex-col h-screen bg-gray-100">
      <div class="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                px-6 py-10 sm:px-10 sm:py-6 
                bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Login
          </h2>

          <form class="mt-10" method="POST" onSubmit={handleSubmit}>
            <label
              for="email"
              class="block text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              onChange={handleChange}
              value={credentials.email}
              id="email"
              type="email"
              name="email"
              placeholder="e-mail address"
              autocomplete="email"
              class="block w-full py-3 px-1 mt-2 
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <label
              for="password"
              class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              value={credentials.password}
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autocomplete="current-password"
              class="block w-full py-3 px-1 mt-2 mb-4
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <button
              type="submit"
              class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                        font-medium text-white uppercase
                        focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Login
            </button>

            <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a href="#" class="flex-2 underline">
                Forgot password?
              </a>

              <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                or
              </p>

              <Link to={"/register"} class="flex-2 underline">
                <p>Crea una cuenta</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
