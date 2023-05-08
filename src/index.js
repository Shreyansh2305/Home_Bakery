import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/productContext";
import App from "./App";
import { CartProvider } from "./context/cart_context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AppProvider>
);
