import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <SkeletonTheme baseColor="#f5f4f4" highlightColor="#e9e8e8">
      <div className="border-2">
        <div>
          <Skeleton className="h-[10rem] lg:h-[15rem] " />
        </div>

        <div className="border-t-2  mt-4">
          <Skeleton className="mt-4 p-2" />
        </div>
        <p>
          <Skeleton className="text-center my-5 h-[5rem]" />
        </p>
        <div className="flex justify-between items-center">
          <Skeleton className="w-36 p-3" />
          <Skeleton className="w-36 p-3" />
        </div>
      </div>
    </SkeletonTheme>
  );
};
export const SuspenseLoading = () => {
  let fakearr = new Array(10).fill("loading");
  return (
    <div className="grid grid-cols-fluid gap-[2rem] my-20 lg:p-5">
      {fakearr.map((_, idx) => (
        <Loading key={idx} />
      ))}
    </div>
  );
};
