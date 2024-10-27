import {useState} from "react";
import AuthenticationAPI from "../api/authentication";
export function SignUpForm({login_page_route}) {
  const [formSuccess, setFormSuccess] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkPasswords = (passw, confirmPassw) => {
    if (passw === confirmPassw) {
      return true;
    } else {
      return false;
    }
  };

  const validationText = (isSuccess, txt) => {
    if (isSuccess) {
      return (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          <span className="font-medium">{txt} </span>
        </p>
      );
    } else {
      return (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{txt}</span>
        </p>
      );
    }
  };

  const validatePasswords = () => {
    if (checkPasswords(password, confirmPassword) && confirmPassword === "") {
      return;
    } else {
      let result =
        checkPasswords(password, confirmPassword) && confirmPassword !== ""
          ? validationText(true, "Passwords match!")
          : validationText(false, "Passwords do not match");

      return result;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkPasswords(password, confirmPassword) === false) {
      return;
    }

    const formData = new FormData(e.target);
    const formVals = Object.fromEntries(formData);

    AuthenticationAPI.registerUser(formVals).then((data) => {
      if (data.message === "User Created Successfully") {
        document.getElementsByTagName("form")[0].reset();
        setFormSuccess(validationText(true, "Alright! Account created."));
      } else {
        setFormSuccess(validationText(false, "Oops! Email is alredy taken!"));
      }
    });
  };

  const handleChange = (e, setTargetState) => {
    setTargetState(e.target.value);
  };

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
                  onChange={(e) => {
                    handleChange(e, setPassword);
                  }}
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
                  onChange={(e) => {
                    handleChange(e, setConfirmPassword);
                  }}
                ></input>
                {validatePasswords()}
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
