import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <section>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="/#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900"
        >
          <img className="mr-2" src="logo.svg" alt="logo" />
        </a>
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create your Free Account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:outline-[#059669] sm:text-sm"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:outline-[#059669] sm:text-sm"
                  required=""
                />
              </div>

              <div>
                <label
                  for="confirm-password"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:outline-[#059669] sm:text-sm"
                  required=""
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-2"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500">
                      I accept the{" "}
                      <a
                        class="font-medium text-[#16a34a] hover:underline dark:text-[#22c55e]"
                        href="/#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#20B486] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#047857] focus:outline-none focus:ring-4 focus:ring-[#6ee7b7]"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <span>
                  <Link
                    to="/login"
                    className="font-medium text-[#059669] hover:underline"
                  >
                    Login here
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
