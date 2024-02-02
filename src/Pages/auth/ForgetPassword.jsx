import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await sendPasswordResetEmail(auth, email);
        navigate("/login");
      } catch (error) {
        setError("Email Not Found!");
        setEmail("");
      } finally {
        setError(null);
      }
    }
  };
  return (
    <div className="container mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[30rem] border-2 p-10 mx-auto mt-[10rem] rounded-md"
      >
        <h2 className="text-center text-3xl font-bold">Reset Password</h2>
        <div className="flex flex-col my-10 ">
          <label htmlFor="email" className="text-xl font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 p-2 text-xl outline-none"
          />
        </div>
        {error && <p className="text-center text-red-500 text-xl">{error}</p>}
        <button className="text-xl border-2 p-3 bg-black text-white rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
