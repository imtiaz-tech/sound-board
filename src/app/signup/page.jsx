"use client";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { signup } from "../../redux/auth";
import { useRouter } from "next/navigation";

// import { useNavigate } from "react-router-dom";

const Signup = () => {
  //   const navigate = useNavigate();
  const router = useRouter();

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [errorText, setErrorText] = useState("");

  const dispatch = useDispatch();

  function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailField);
  }

  const onRegister = async () => {
    const isvalid = validateEmail(email);
    if (name === "") {
      setErrorText("Username is required");
    } else if (email === "") {
      setErrorText("Email is required");
    } else if (!isvalid) {
      setErrorText("Email is not valid");
      return;
    } else if (password === "") {
      setErrorText("Password is required");
    } else {
      const userData = { name, password, email };
      dispatch(signup(userData)).then(({ payload }) => {
        if (payload?.success) {
          router.push("/login");
        } else {
          setErrorText(payload?.message);
        }
      });
    }
  };

  const onInputChange = (e) => {
    setErrorText("");
    const name = e.target.name;
    const value = e.target.value;
    if (name === "username") {
      setname(value);
    } else if (name === "email") {
      setemail(value);
    } else if (name === "password") {
      setpassword(value);
    }
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 ">
        <div className=" p-8 rounded-lg shadow-md w-full max-w-md bg-black-100 border border-gray-300">
          <h2 className="text-2xl font-bold text-center mb-6">Sign-Up</h2>

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
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">OR</h2>
          </div>
          <div className="space-y-4">
            <label htmlFor="name" className="block text-white-700 font-medium">
              Name
            </label>{" "}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={name}
              onChange={(e) => onInputChange(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label
              htmlFor="phoneNo"
              className="block text-white-700 font-medium"
            >
              Email
            </label>{" "}
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label
              htmlFor="phoneNo"
              className="block text-white-700 font-medium"
            >
              Password
            </label>{" "}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onInputChange(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errorText && (
              <p className="text-sm text-red-500 text-center">{errorText}</p>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              onClick={onRegister}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </div>
          <p className="text-sm text-center mt-4">
            Already have an account? Then please{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
