import AuthenticationAPI from "../../api/authentication";

export function LoginForm({register_page_route}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formVals = Object.fromEntries(formData);

    console.log(AuthenticationAPI.loginUser(formVals));
  };

  return (
    <section className="gray-50 bg-gray-900">
      <div className="flex flex-col items-center jusitfy-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0
        bg-gray-800 border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              className="text-xl font-bold leading-tight tracking-tight 
            md:text-2xl text-white"
            >
              Sign in to your account
            </h1>

            <form
              action="login"
              method="post"
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
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
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="/search"
                  className="text-sm font-medium text-white hover:underline"
                >
                  Forgot password
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-fuchsia-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href={register_page_route}
                  className="font-medium  hover:underline text-fuchsia-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
