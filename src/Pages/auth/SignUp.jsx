import React from "react";
import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credential, setcredential] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleCredentialChange = (e) => {
    setError(null);
    const { name, value } = e.target;
    setcredential((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credential.email && credential.password.trim().length > 6) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          credential.email,
          credential.password
        );
        await sendEmailVerification(auth.currentUser);
        navigate("/");
      } catch (error) {
        setError("Email Already In Use");
        setcredential((prev) => ({ email: "", password: "" }));
      }
    } else {
      setError("Password Must be 6 charactor");
      setcredential((prev) => ({ email: "", password: "" }));
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
        <button className="p-3 text-xl border-2 bg-black text-white rounded-lg mt-10">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
