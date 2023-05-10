import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("SKCart");
  console.log(localCartData);
  if (localCartData === "null") {
    return [];
  } else return JSON.parse(localCartData);
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 100
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //to add item to cart
  const addToCart = (id, amount, price, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, price, product } });
  };

  //to remove item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //increment and decrement products in cart item

  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  //to clear the cart Item
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //to add the data in localStorage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("SKCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrement,
        setIncrement
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
