import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import CartItem from "../CartItem/CartItem";
import ChooseItem from "../ChooseItem/ChooseItem";
import "./Cart.module.css";
import EmptyCart from "./EmptyCart/EmptyCart";

function Cart({ cart, resetCart, chooseItem, choosenItem }) {
  console.log(choosenItem);

  const [flip, set] = useState(false);
  const props = useSpring({
    to: { right: 80 },
    from: { right: 50 },
    reverse: flip,
    delay: 5000,
    onRest: () => set(!flip),
  });
  return (
    <div>
      <animated.div
        style={props}
        className="cart-btn"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <FontAwesomeIcon icon={faCartArrowDown} />
        <span className="badge badge-primary">{cart.length}</span>
      </animated.div>

      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel" className="pb-2 border-bottom">
            Your Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.length ? (
            cart.map((item) => (
              <CartItem item={item} key={item["_id"]}></CartItem>
            ))
          ) : (
            <EmptyCart></EmptyCart>
          )}
          <br />
          <button className="btn btn-info" onClick={chooseItem}>
            Choose 1 For me
          </button>{" "}
          <br />
          <br />
          {cart.length || choosenItem["_id"] ? (
            <button className="btn btn-warning" onClick={resetCart}>
              Empty Cart
            </button>
          ) : (
            ""
          )}
          <div className="choosen-items">
            {<ChooseItem item={choosenItem}></ChooseItem>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
