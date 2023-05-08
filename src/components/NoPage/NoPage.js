import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        fontFamily: "cursive",
        color: "#802b00",
        fontSize: "16px",
        textAlign: "center"
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>404 Not Found</h2>
      <p style={{ marginBottom: "20px" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <p style={{ marginBottom: "20px" }}>
        Please check the URL and try again.
      </p>
      <p style={{ marginBottom: "20px" }}>
        In the meantime, here's a recipe for one of our favorite cakes:
      </p>
      <ul>
        <li>
          <a href="https://www.allrecipes.com/recipe/17481/simple-white-cake/">
            Simple White Cake
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
