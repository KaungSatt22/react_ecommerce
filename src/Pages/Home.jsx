import React from "react";
import { getAllProducts } from "../api/api";
import Products from "../components/Products";

import { useQuery } from "@tanstack/react-query";
import { useSearch } from "../hooks/useSearch";
import { SuspenseLoading } from "../components/Loading";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get", "Products"],
    queryFn: getAllProducts,
  });
  const { search } = useSearch();
  const showData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      {isLoading ? (
        <div className="">
          <SuspenseLoading />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-fluid gap-[2rem] my-20 lg:p-5">
            {showData?.length > 0 ? (
              showData.map((item) => <Products key={item.id} {...item} />)
            ) : (
              <div>
                <h2 className="text-center text-4xl font-bold">
                  No Data Found
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
