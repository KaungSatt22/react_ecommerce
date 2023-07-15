import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getSingleDetail } from "../api/api";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { INITIAL_TYPE } from "../Context/CartContext";

import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { RxDot } from "react-icons/rx";

const Details = () => {
  const { dispatch, cartItem } = useCart();
  const [currentIdx, setCurrentIdx] = useState(0);
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["get", "Detail"],
    queryFn: () => getSingleDetail(id),
  });
  const cartAdd = (id, price, image) => {
    dispatch({ type: INITIAL_TYPE.ADDTOCART, payload: { id, price, image } });
  };
  const prevSlide = () => {
    let next = currentIdx === 0 ? data.images.length - 1 : currentIdx - 1;
    setCurrentIdx(next);
  };
  const nextSlide = () => {
    let lastIdx = data.images.length - 1;
    let next = currentIdx === lastIdx ? 0 : currentIdx + 1;
    setCurrentIdx(next);
  };
  const slideBar = (idx) => {
    setCurrentIdx(idx);
  };
  return (
    <div>
      {isLoading && <div>Loading ............</div>}
      {data && (
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center space-x-5 mt-20 border-2 bg-slate-50 overflow-hidden">
          <div className="w-[30rem] lg:w-[40rem] h-[25rem] relative  group px-16">
            <div
              className="w-full h-full bg-center duration-500 bg-contain -z-10"
              style={{
                backgroundImage: `url(${data.images[currentIdx]})`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <CgChevronLeft
              size={35}
              className="hidden group-hover:block absolute left-10 lg:left-2 top-[50%] -translate-x-0 translate-y-[-50%] border-2 rounded-full text-black p-2 border-black cursor-pointer"
              onClick={prevSlide}
            />

            <CgChevronRight
              size={35}
              className=" hidden group-hover:block absolute right-10 lg:right-2 top-[50%] -translate-x-0 translate-y-[-50%] border-2 rounded-full text-black p-2 border-black cursor-pointer"
              onClick={nextSlide}
            />
            <div className="absolute bottom-0 flex space-x-5 left-1/3 lg:mb-2">
              {data.images.map((_, idx) => (
                <RxDot
                  onClick={() => slideBar(idx)}
                  key={idx}
                  className={`hidden group-hover:block text-2xl cursor-pointer ${
                    idx === currentIdx ? "text-red-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 p-5">
            <h2 className="text-3xl text-center  lg:mt-5 font-bold">
              {data.title}
            </h2>
            <div className="flex items-center justify-between text-md my-10">
              <p className="font-thin">Price $ {data.price}</p>
              <p className="font-thin lg:mr-20">Rating {data.rating}</p>
            </div>
            <div>
              <p className="text-xl text-center lg:text-left my-10">
                {data.description}
              </p>
            </div>
            <button
              onClick={() => cartAdd(data.id, data.price, data.thumbnail)}
              className="block mx-auto mt-5 p-2 border-2 border-black text-xl hover:bg-black hover:text-white duration-700 ease-linear lg:m-0"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
