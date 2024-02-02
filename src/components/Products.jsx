import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Products = ({ id, thumbnail, title, price, description }) => {
  const { cartAdd } = useCart();

  return (
    <div key={id} className="border-2 p-5 rounded-lg bg-slate-50">
      <div className="mb-5 border-b-2">
        <img
          src={thumbnail}
          className="object-contain h-[10rem] lg:h-[15rem] w-[80%] mx-auto rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl">{title}</h2>
        <p>Price: $ {price}</p>
      </div>
      <p className="text-center my-5 h-[5rem]">
        {description.substring(0, 60)}.....
      </p>
      <div className="flex items-center justify-between my-5">
        <NavLink
          to={`/products/${id}`}
          className="border-2  p-2 rounded-lg hover:bg-black hover:text-white transition-colors ease-in-out duration-700"
        >
          Details
        </NavLink>
        <button
          onClick={() => cartAdd(id, price, thumbnail)}
          className="border-2  p-2 rounded-lg hover:bg-black hover:text-white transition-colors ease-in-out duration-700"
        >
          Add To Carts
        </button>
      </div>
    </div>
  );
};

export default Products;
