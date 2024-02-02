import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItem } = useCart();
  const totalPrice =
    cartItem.length > 0 &&
    cartItem?.map((cart) => cart.total).reduce((a, b) => a + b);

  return (
    <div>
      {cartItem.length > 0 ? (
        <div className="p-3">
          {cartItem.map((cart) => (
            <CartItem
              key={cart.id}
              id={cart.id}
              image={cart.image}
              price={cart.price}
              quantity={cart.quantity}
            />
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
