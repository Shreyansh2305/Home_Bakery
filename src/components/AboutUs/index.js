import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      style={{
        fontFamily: "cursive",
        color: "#802b00",
        fontSize: "16px",
        textAlign: "center"
      }}
    >
      <h2>About Us</h2>
      <p>
        Welcome to our bakery! We offer a wide range of delicious baked goods,
        including cakes, muffins, pies, and cookies.
      </p>
      <p>
        All of our products are made from the finest ingredients and are baked
        fresh every day. We take pride in our commitment to quality and taste.
      </p>
      <p>Here are some of our most popular products:</p>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyleType: "none",
          padding: "0"
        }}
      >
        <li>
          Cakes - Our cakes come in a variety of flavors, from classic chocolate
          to fruity and refreshing lemon. They're perfect for any occasion,
          whether it's a birthday, wedding, or just a special treat.
        </li>
        <li>
          Muffins - Our muffins are a customer favorite! They're moist, fluffy,
          and bursting with flavor. Our selection includes blueberry, chocolate
          chip, and pumpkin spice.
        </li>
        <li>
          Pies - Our pies are the perfect ending to any meal. From classic apple
          to rich and decadent chocolate cream, there's something for everyone.
        </li>
        <li>
          Cookies - Our cookies are baked fresh every day and come in a variety
          of flavors. Whether you prefer chocolate chip, oatmeal raisin, or
          peanut butter, we've got you covered.
        </li>
      </ul>
      <p>
        We believe that baking is an art, and we're passionate about creating
        delicious, high-quality baked goods. If you're interested in trying some
        of our recipes at home, check out our recipe section below.
      </p>
      <h3>Recipes</h3>
      <p>Here are some of our favorite recipes:</p>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyleType: "none"
        }}
      >
        <li>
          <NavLink to="/products/5">Vegan Choclate Cake</NavLink>
        </li>
        <li>
          <NavLink to="/products/10">Spring lamb cupcakes</NavLink>
        </li>
        <li>
          <NavLink to="/products/15">Sugarplum fairy cakes</NavLink>
        </li>
        <li>
          <NavLink to="/products/24">Eton mess traybake</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
