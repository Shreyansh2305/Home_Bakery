import React from "react";
import "./Home.css";
import { useProductContext } from "../../context/productContext";
import { NavLink } from "react-router-dom";
import FormatPrice from "../FormatPrice";
import { useCartContext } from "../../context/cart_context";

export default function Home() {
  const [page, setPage] = React.useState(1);
  const [clicked, setClicked] = React.useState(null);
  const { isLoading, products } = useProductContext();
  const { addToCart } = useCartContext();

  // Logic for displaying only 10 products in 1 screen
  const productsPerPage = 10;
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products?.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  //logic for displaying page numbers
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  function handleClick(event) {
    setPage(event.target.id);
  }

  if (isLoading) {
    return <div className="loading">......Loading</div>;
  }

  return (
    <div className="product-wrapper">
      <div className="product-list">
        {currentProducts !== undefined &&
          currentProducts.map((item) => {
            return (
              <NavLink
                to={`/products/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="product-card">
                  <img src={item.image} alt="ddfddfdffd" />
                  <div className="product-name">
                    <p className="title">{item.title}</p>
                  </div>
                  <p className="product-price">
                    <FormatPrice price={item.price} />
                  </p>
                  <div
                    className={`btn ${clicked === item.id ? "clicked" : ""}`}
                    onClick={(event) => {
                      setClicked(item.id);
                      setTimeout(() => {
                        setClicked(null);
                      }, 500); // Remove the class after 500ms
                      addToCart(item.id, 1, item.price, item);
                      event.preventDefault();
                    }}
                  >
                    Add to Cart
                  </div>
                </div>
              </NavLink>
            );
          })}
      </div>
      {<ul id="page-numbers">{renderPageNumbers}</ul>}
    </div>
  );
}
