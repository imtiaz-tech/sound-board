"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [errorText, setErrorText] = useState("");

  const onLogin = (event) => {
    event.preventDefault();
    let isValid = true;
    if (email === "") {
      setEmailErrorText("email is required");
      isValid = false;
    }
    if (password === "") {
      setPasswordErrorText("Password is required");
      isValid = false;
    }
    if (isValid) {
      const adminData = { email, password };
      dispatch(signin(adminData)).then(({ payload }) => {
        if (payload?.success) {
          router.push("/dashboard");
        } else {
          setErrorText(payload);
        }
      });
    }
  };
  const handleEmailChange = (e) => {
    setemail(e.target.value);
    if (emailErrorText) emailErrorText("");
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
    if (passwordErrorText) setPasswordErrorText("");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-black-100">
        <div className=" p-8 rounded-lg shadow-md w-full max-w-md bg-black-100 border border-gray-300">
          <h1 className="text-2xl font-bold text-center mb-6">Sign in</h1>
          {/* <div className="flex items-center justify-center">
            <button className="px-6 py-3 border flex gap-3 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-full sm:w-auto max-w-xs dark:bg-gray-800">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span className="text-sm sm:text-base">Login with Google</span>
            </button>
          </div> */}
          <div className="flex flex-col max-w-sm gap-2">
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
              Sign in with Facebook
            </button>

            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
              </svg>
              Sign in with Google
            </button>
          </div>
          <br></br>
          <h1 className="text-2xl font-bold text-center mb-6">OR</h1>

          <form onSubmit={onLogin} className="space-y-4">
            <div>
              <label
                htmlFor="phoneNo"
                className="block text-white-700 font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="text"
                id="email"
                className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
              {emailErrorText && (
                <p className="text-red-500 text-sm mt-1">{emailErrorText}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-white-700 font-medium"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="***************"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordErrorText && (
                <p className="text-red-500 text-sm mt-1">{passwordErrorText}</p>
              )}
            </div>
            {errorText && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {errorText}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Doesn't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
