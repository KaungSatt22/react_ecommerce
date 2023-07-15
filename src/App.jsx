import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import PrivateRoute from "./Pages/auth/PrivateRoute";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import ForgetPassword from "./Pages/auth/ForgetPassword";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Details from "./Pages/Details";
import { CartContextProvider } from "./Context/CartContext";
import { SearchContextProvider } from "./Context/SearchContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <SearchContextProvider>
            <Navbar />
            <Routes>
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<Details />} />
              </Route>
            </Routes>
          </SearchContextProvider>
        </CartContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
