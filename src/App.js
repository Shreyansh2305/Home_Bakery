import "./styles.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./components/Home/index";
import SingleProduct from "./components/SIngleProduct/index";
import About from "./components/AboutUs/index";
import Contact from "./components/Contact/index";
import NoPage from "./components/NoPage/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
