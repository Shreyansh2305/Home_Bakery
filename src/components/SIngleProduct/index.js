import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import { NavLink } from "react-router-dom";
import "./SingleProduct.css";
import AddToCart from "../AddToCart/AddToCart";
import FormatPrice from "../FormatPrice";

const SingleProduct = () => {
  const {
    getSingleProduct,
    isSingleLoading,
    singleProduct,
    products
  } = useProductContext();

  const {
    title,
    description,
    time,
    ingredients,
    image,
    portion
  } = singleProduct;
  // const image = singleProduct?.productImages[0];

  const location = useLocation();
  const id = location.pathname.split("/").at(-1);
  // console.log("id" + id);

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  //for getting the price
  const product = products.find((p) => p.id === id);
  const price = product ? product.price : null;
  // console.log(price);

  //for getting price format

  if (isSingleLoading) return <div className="loading">......Loading</div>;

  return (
    <div className="wrapper-single">
      <div className="page-navigation">
        <NavLink to="/">Home</NavLink>/{title}
      </div>
      <div className="main-container">
        <div className="grid">
          {/* product image */}
          <div className="product-image">
            <img
              src={image}
              alt="Poduct"
              style={{ height: "500px", width: "500px" }}
            />
          </div>

          {/* product data */}
          <div className="product-data">
            <h1>{title}</h1>
            <p style={{ opacity: "0.8" }}>
              {" "}
              MRP:&nbsp;&nbsp;
              <FormatPrice price={price} />
            </p>
            <p style={{ opacity: "0.8" }}>{description}</p>

            {/* portion details */}
            <p>
              Portion:&nbsp;&nbsp;
              <span style={{ opacity: "0.8" }}>{portion}</span>
            </p>

            {/* Time taken to prepare */}
            <p>
              Time:&nbsp;&nbsp;<span style={{ opacity: "0.8" }}>{time}</span>
            </p>

            {/* Ingredients list */}
            <ul className="ingredient-list">
              <p>Ingredients:</p>
              {ingredients !== undefined &&
                ingredients.map((item) => {
                  return (
                    <li style={{ opacity: "0.8", marginLeft: "20px" }}>
                      {item}
                    </li>
                  );
                })}
            </ul>
            <hr />
            <AddToCart
              product={singleProduct}
              price={price}
              id={singleProduct.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
