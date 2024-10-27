import {useState} from "react";

import AuthenticationAPI from "../api/authentication";
export function SignUpForm({login_page_route}) {
  const [formSuccess, setFormSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formVals = Object.fromEntries(formData);

    AuthenticationAPI.registerUser(formVals).then((data) => {
      if (data.message === "User Created Successfully") {
        console.log(data);
        document.getElementsByTagName("form")[0].reset();
        setFormSuccess(
          <p class="mt-2 text-sm text-green-600 dark:text-green-500">
            <span class="font-medium">Alright!</span> Account created!
          </p>
        );
      } else {
        setFormSuccess(
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oops!</span> Email is already taken!
          </p>
        );
      }
    });
  };

  // <div class="mb-5">
  //   <label for="username-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
  //   <input type="text" id="username-success" class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Bonnie Green">
  //   <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p>
  // </div>
  // <div>
  //   <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your name</label>
  //   <input type="text" id="username-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Bonnie Green">
  //   <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p>
  // </div>
  return (
    <section className="gray-50 bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0
      bg-gray-800 border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              className="text-xl font-bold leading-tight tracking-tight 
          md:text-2xl text-white"
            >
              Create an account
            </h1>

            <form
              action="/register"
              method="post"
              className="space-y-4 md:space-y-6 "
              onSubmit={handleSubmit}
            >
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm  font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-700 border-2 border-gray-600  outline-none  text-white placeholder-gray-400 sm:text-sm
              rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5
                
              "
                  placeholder="name@company"
                  required=""
                ></input>
                {formSuccess === "" ? <p></p> : formSuccess}
              </div>

              <div className="text-left">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className=" bg-gray-700 border-2 block outline-none border-gray-600  text-white placeholder-gray-400 sm:text-sm
              rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 w-full p-2.5"
                  placeholder="***********"
                  required=""
                ></input>
              </div>

              <div className="text-left">
                <label
                  htmlFor="confirmpassword"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  className=" bg-gray-700 border-2 block outline-none border-gray-600  text-white placeholder-gray-400 sm:text-sm
              rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 w-full p-2.5"
                  placeholder="***********"
                  required=""
                ></input>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="fles items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4"
                      required=""
                    ></input>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">
                      I accept the terms and conditions (there are none)
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-fuchsia-800"
              >
                Create an account
              </button>

              <a
                href={login_page_route}
                className="font-medium text-sm  hover:underline text-fuchsia-500"
              >
                Already have an account? Log in to your account
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
