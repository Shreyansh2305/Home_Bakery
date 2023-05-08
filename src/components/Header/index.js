import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/free-light-svg-icons";
import "./header.css";
import logo from "../../asset/logo.jpg";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";

export default function Header() {
  const { total_item } = useCartContext();

  return (
    <nav>
      <NavLink to={"/"} className="logo-link">
        <img src={logo} className="main-logo" alt="logo" />
      </NavLink>
      <NavLink to={"/"} className="navbar-link">
        Home
      </NavLink>

      <NavLink to={"/about"} className="navbar-link">
        About Us
      </NavLink>

      <NavLink to={"/contact"} className="navbar-link">
        Contact
      </NavLink>

      <NavLink to={"/cart"} className="cart-trolley-link">
        <FontAwesomeIcon
          className="header-icon cart-trolley"
          icon={faCartShopping}
        />
        <span className="cart-total-item">{total_item}</span>
      </NavLink>
    </nav>
  );
}
