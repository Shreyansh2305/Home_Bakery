import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const AddToCart = () => {
  const [amount, setAmount] = React.useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 5 ? setAmount(amount + 1) : setAmount(5);
  };

  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button
          onClick={() => {
            setDecrease();
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            setIncrease();
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
