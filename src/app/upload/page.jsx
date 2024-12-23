"use client";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { signup } from "../../redux/auth";

const Signup = () => {
  const [soundName, setSoundName] = useState("");
  const [color, setColor] = useState("#FF0000");
  const [soundFile, setSoundFile] = useState(null);
  const [errorText, setErrorText] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const onRegister = async () => {
    const isValid = validateEmail(email);
    if (soundName === "") {
      setErrorText("Sound Name is required");
    } else if (soundFile === "") {
      setErrorText("Sound file is required");
    } else if (color === "") {
      setErrorText("color is required");
      return;
    } else if (category === "") {
      setErrorText("category file is required");
    } else {
      const userData = { name, email, password, color, soundFile };
      dispatch(signup(userData)).then(({ payload }) => {
        if (payload?.success) {
          <Link href="/login"></Link>;
        } else {
          setErrorText(payload?.message);
        }
      });
    }
  };

  const handleInputChange = (e) => {
    setErrorText("");
    const { name, value } = e.target;
    if (soundName === "username") {
      setSoundName(value);
    } else if (name === "soundFile") {
      setSoundFile(value);
    } else if (name === "color") {
      setColor(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  const handleFileChange = (e) => {
    setSoundFile(e.target.files[0]);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black-100">
        <div className="p-8 rounded-lg shadow-md w-full max-w-md bg-black-100 border border-gray-300">
          {/* <h2 className="text-2xl font-bold text-center mb-6">Sign-Up</h2> */}
          <div className="space-y-4">
            <label htmlFor="name" className="block text-white-700 font-medium">
              Name of Sound
            </label>
            <input
              type="text"
              name="username"
              value={soundName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label htmlFor="sound" className="block text-white-700 font-medium">
              Sound File
            </label>
            <input
              type="file"
              accept=".mp3, .wav, .ogg,.aiff,.plac,.pcm"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />

            <label htmlFor="color" className="block text-white-700 font-medium">
              Pick a Color
            </label>
            <input
              id="colorInput"
              type="color"
              value={color}
              onChange={handleColorChange}
              className="w-full h-10"
            />

            {errorText && (
              <p className="text-sm text-red-500 text-center">{errorText}</p>
            )}
            <label htmlFor="name" className="block text-white-700 font-medium">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Select Category"
              value={category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              onClick={onRegister}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
