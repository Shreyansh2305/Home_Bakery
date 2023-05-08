import React from "react";
import CartAmountToggle from "../AddToCart/CartAmountToggle";
import FormatPrice from "../FormatPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/cart_context";

const CartItem = ({ id, name, image, amount, price }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <img
            src={image}
            alt={id}
            style={{ height: "50px", width: "50px", borderRadius: "5px" }}
          />
        </div>
        <div>
          <p style={{}}>{name}</p>
        </div>
      </div>

      {/* for price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* for quantity */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrement(id)}
        setIncrease={() => setIncrement(id)}
      />

      {/* for subtotal */}
      <div className="cart-hide">
        <p>
          {" "}
          <FormatPrice price={price * amount} />{" "}
        </p>
      </div>

      <div>
        <FontAwesomeIcon
          className="remove_icon"
          icon={faTrash}
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
