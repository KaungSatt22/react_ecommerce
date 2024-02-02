import React from "react";
import { useState } from "react";

import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [credential, setcredential] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const handleCredentialChange = (e) => {
    const { name, value } = e.target;
    setcredential((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credential.email && credential.password) {
      try {
        await signUp(credential.email, credential.password);
        await sendEmailVerification(auth.currentUser);
        navigate("/");
      } catch (error) {
        setError(error.message.split(":")[1]);
        setcredential({ email: "", password: "" });
      } finally {
        setError(null);
      }
    }
  };
  return (
    <div className="container mx-auto mt-20">
      <form
        className="w-full lg:w-[35rem] mx-auto border-2 p-5 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-4xl font-bold mb-10">Login</h2>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-xl font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={credential.email}
            className="border-2 p-2 text-xl outline-none"
            required
            onChange={handleCredentialChange}
          />
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="password" className="text-xl font-bold">
            Password
          </label>
          <input
            value={credential.password}
            type="password"
            id="password"
            name="password"
            className="border-2 p-2 text-xl outline-none"
            required
            onChange={handleCredentialChange}
          />
        </div>
        {error && <p className="text-red-500 text-center text-xl">{error}</p>}
        <button className="p-3 text-xl border-2 bg-black text-white rounded-lg ">
          Create Account
        </button>
        <p className="text-center my-5 font-light">
          Have You Already Account{" "}
          <NavLink to="/login" className="text-blue-500 hover:underline">
            signin
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
