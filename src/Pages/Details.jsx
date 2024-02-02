import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getSingleDetail } from "../api/api";
import { useCart } from "../hooks/useCart";
import SlideImg from "../components/SlideImg";

const Details = () => {
  const { cartAdd } = useCart();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["get", "Detail"],
    queryFn: () => getSingleDetail(id),
  });
  return (
    <div>
      {isLoading && <div>Loading ............</div>}
      {data && (
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center space-x-5 mt-20 border-2 bg-slate-50 overflow-hidden">
          <SlideImg images={data.images} />
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
              className="block mx-auto mt-5 p-2 border-2 rounded-lg text-xl hover:bg-black hover:text-white duration-700 ease-linear lg:m-0"
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
