import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cartItem, cartAdd, cartReduce, removeCartItem } = useCart();
  const totalPrice =
    cartItem.length > 0 &&
    cartItem?.map((cart) => cart.total).reduce((a, b) => a + b);

  return (
    <div>
      {cartItem.length > 0 ? (
        <div className="p-3">
          {cartItem.map((cart) => (
            <div
              key={cart.id}
              className="mt-5 flex items-center justify-between"
            >
              <div className="w-[5rem] lg:w-[10rem] ">
                <img src={cart.image} />
              </div>
              <p className="font-thin">$ {cart.price}</p>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => cartAdd(cart.id, cart.price, cart.image)}
                  className="px-2 border-2 text-black text-xl rounded-lg  hover:bg-black hover:text-white duration-500 transition-colors ease-in-out hover:scale-95"
                >
                  +
                </button>
                <p className="border-2 px-2 rounded-lg font-thin text-xl">
                  x{cart.quantity}
                </p>
                <button
                  onClick={() => cartReduce(cart.id)}
                  className="px-2  border-2 text-black text-xl rounded-lg hover:bg-black hover:text-white duration-500 transition-colors ease-in-out hover:scale-95"
                >
                  -
                </button>
                <button
                  onClick={() => removeCartItem(cart.id)}
                  className="px-2  border-2 text-black text-xl rounded-lg hover:bg-black hover:text-white duration-500 transition-colors ease-in-out hover:scale-95"
                >
                  X
                </button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-end space-x-10 border-t-2 mt-5 pt-5">
            <p className="text-lg font-bold">Total : </p>
            <p>${totalPrice}</p>
          </div>
        </div>
      ) : (
        <h2 className="text-center mt-36 text-2xl">No Cart Items Found!</h2>
      )}
    </div>
  );
};

export default Cart;
