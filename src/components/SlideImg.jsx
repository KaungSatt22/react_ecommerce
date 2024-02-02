import React from "react";
import { useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { RxDot } from "react-icons/rx";

const SlideImg = ({ images }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const prevSlide = () => {
    let next = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
    setCurrentIdx(next);
  };
  const nextSlide = () => {
    let lastIdx = images.length - 1;
    let next = currentIdx === lastIdx ? 0 : currentIdx + 1;
    setCurrentIdx(next);
  };
  const slideBar = (idx) => {
    setCurrentIdx(idx);
  };
  return (
    <div className="w-[30rem] lg:w-[40rem] h-[25rem] relative  group px-16">
      <div
        className="w-full h-full bg-center duration-500 bg-contain -z-10"
        style={{
          backgroundImage: `url(${images[currentIdx]})`,
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
        {images.map((_, idx) => (
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
  );
};

export default SlideImg;
