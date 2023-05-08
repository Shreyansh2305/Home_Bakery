import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./AddToCart.css";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ product, price, id }) => {
  const { addToCart } = useCartContext();

  const [amount, setAmount] = React.useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 5 ? setAmount(amount + 1) : setAmount(5);
  };

  return (
    <div className="cart-wrapper">
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart" onClick={() => addToCart(id, amount, price, product)}>
        <button className="cart-button">Add To Cart</button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
