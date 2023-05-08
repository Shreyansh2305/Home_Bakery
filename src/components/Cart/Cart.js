import React from "react";
import { useCartContext } from "../../context/cart_context";
import "./Cart.css";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="no-item">
        <h3>No Item in Cart</h3>
      </div>
    );
  }

  return (
    <div className="wrapper-cart">
      <div className="cart-heading grid grid-five-column">
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <p className="cart-hide">Subtotal</p>
        <p>Remove</p>
      </div>
      <hr style={{ width: "100%" }} />

      <div className="cart-item">
        {cart.map((element) => {
          return <CartItem key={element.id} {...element} />;
        })}
      </div>
      <hr style={{ width: "100%" }} />

      <div className="cart-two-button">
        <NavLink to="/">
          <button className="cart-btn">Continue Shopping</button>
        </NavLink>
        <button className="cart-btn btn-clear" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      {/* order total amount */}
      <div className="order-total-amount">
        <div className="order-total-subdata">
          <div>
            <p>Subtotal :</p>
            <p>
              <FormatPrice price={total_price} />
            </p>
          </div>
          <div>
            <p>Shipping Fee :</p>
            <p>
              <FormatPrice price={shipping_fee} />
            </p>
          </div>
          <hr style={{ width: "100%" }} />
          <div>
            <p>Order total :</p>
            <p>
              <FormatPrice price={shipping_fee + total_price} />
            </p>
          </div>
        </div>
        {/* button for checkout */}
        <div className="checkout-btn">
          <button
            className="cart-btn"
            onClick={() => {
              console.log("Subtotal : " + total_price);
              console.log("Shipping Fee : " + shipping_fee);
              console.log("Order total : " + (shipping_fee + total_price));
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
