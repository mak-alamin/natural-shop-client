import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Header.css";

const Header = ({ cart, resetCart, chooseItem, choosenItem }) => {
  return (
    <div className="container-fluid bg-light">
      <nav className="col-md-10 navbar navbar-expand-lg navbar-light px-3">
        <h1 className="siteName">
          <NavLink to="/" className={"navbar-brand"}>
            <span className="primary-text">Natural</span> Shop
          </NavLink>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/natural-shop-admin"
                className="nav-link bg-dark text-white"
              >
                Admin
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
      <Cart
        cart={cart}
        resetCart={resetCart}
        chooseItem={chooseItem}
        choosenItem={choosenItem}
      ></Cart>
    </div>
  );
};

export default Header;
