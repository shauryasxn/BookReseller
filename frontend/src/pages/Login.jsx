import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [isSignup, setIsSignup] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setPhoneError("");

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    }

    // Validate name (for sign-up)
    if (isSignup && name.trim().length < 3) {
      setNameError("Name must be at least 3 characters long.");
    }

    // Validate phone number (for sign-up)
    if (isSignup && (phone.toString().length !== 10 || isNaN(phone))) {
      setPhoneError("Please enter a valid 10-digit phone number.");
    }

    // If no errors, proceed with form submission
    if (
      !emailError &&
      !passwordError &&
      (!isSignup || (!nameError && !phoneError))
    ) {
      const url = isSignup
        ? "http://localhost:5555/auth/register"
        : "http://localhost:5555/auth/login";

      const requestBody = isSignup
        ? {
            email: email,
            password: password,
            name: name,
            phone: phone,
          }
        : {
            email: email,
            password: password,
          };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("authToken", data.authToken);
            navigate("/");
            alert(isSignup ? "Registered successful" : "Login successful");
          } else {
            alert(data.error);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setName("");
    setPhone(0);
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setPhoneError("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {isSignup ? "Sign Up" : "Sign In"}
        </h1>
        <p className="mb-8 text-2xl text-gray-600 text-center">
          Please {isSignup ? "sign up" : "sign in"} to continue!
        </p>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
  
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </>
          )}
  
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 block mx-auto"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>


        </form>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4 text-center">
          {isSignup
            ? "Already have an account? "
            : "Don't have an account? "}
          <button
            onClick={toggleForm}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;