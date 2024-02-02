import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const SignIn = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const handleCredentialChange = (e) => {
    setError(null);
    const { name, value } = e.target;
    setCredential((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (credential.email && credential.password) {
        await signIn(credential.email, credential.password);
        navigate("/");
      }
    } catch (error) {
      setError("Invalid Email or Password");
      setCredential({ email: "", password: "" });
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
        {error && <p className="text-red-500 text-center text-lg">{error}</p>}
        <button className="p-3 text-xl border-2 bg-black text-white rounded-lg">
          Login
        </button>
        <NavLink
          to="/forgetpassword"
          className="ml-5 text-blue-400 hover:underline "
        >
          Forget Password
        </NavLink>
        <p className="mt-10 text-center font-light">
          If you don't have account
          <NavLink to="/signup" className="text-blue-400 hover:underline p-2">
            signup
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
