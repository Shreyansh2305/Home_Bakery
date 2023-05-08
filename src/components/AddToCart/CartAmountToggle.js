import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./AddToCart.css";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="cart-wrapper">
      <div className="amount-toggle">
        <button
          className="counter-button"
          onClick={() => {
            setDecrease();
          }}
        >
          <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faMinus} />
        </button>
        <p>{amount}</p>
        <button
          className="counter-button"
          onClick={() => {
            setIncrease();
          }}
        >
          <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
