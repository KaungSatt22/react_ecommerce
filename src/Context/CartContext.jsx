import { useReducer } from "react";
import { createContext } from "react";

const initialState = {
  cart: [],
};
export const CartContext = createContext({
  cart: [],
  dispatch: () => {},
});

export const INITIAL_TYPE = {
  ADDTOCART: "ADDTOCART",
  REDUCECART: "REDUCECART",
  REMOVETOCART: "REMOVETOCART",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case INITIAL_TYPE.ADDTOCART:
      const addItemExist = state.cart.findIndex(
        (cart) => cart.id === payload.id
      );
      if (addItemExist !== -1) {
        let newArr = [...state.cart];
        newArr[addItemExist].quantity++;
        newArr[addItemExist].total =
          newArr[addItemExist].quantity * newArr[addItemExist].price;
        return {
          ...state,
          cart: newArr,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: payload.id,
              price: payload.price,
              image: payload.image,
              quantity: 1,
              total: payload.price * 1,
            },
          ],
        };
      }
    case INITIAL_TYPE.REDUCECART:
      const removeItemExist = state.cart.findIndex(
        (cart) => cart.id === payload.id
      );
      if (removeItemExist !== -1) {
        let newArr = [...state.cart];
        if (newArr[removeItemExist].quantity > 1) {
          newArr[removeItemExist].quantity--;
          newArr[removeItemExist].total =
            newArr[removeItemExist].quantity * newArr[removeItemExist].price;
          return {
            ...state,
            cart: newArr,
          };
        } else {
          newArr.splice(removeItemExist, 1);
          return {
            ...state,
            cart: newArr,
          };
        }
      }
    case INITIAL_TYPE.REMOVETOCART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== payload.id),
      };
    default:
      return state;
  }
};
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
