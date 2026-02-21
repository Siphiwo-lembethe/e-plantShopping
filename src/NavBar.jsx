import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => setCurrentPage("products")}>
        <h1 className="logo">🌿 Paradise Nursery</h1>
        <p className="slogan">Bringing Nature Closer to You</p>
      </div>

      <div className="nav-right">
        <h2
          className="plants-link"
          onClick={() => setCurrentPage("products")}
        >
          Plants
        </h2>

        <div
          className="cart-icon"
          onClick={() => setCurrentPage("cart")}
        >
          🛒 {totalItems}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
