import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [overlay, setOverlay] = useState(false);

  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  function handleRemove() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  function handleClick() {
    setCart((prev) => !prev);
  }
  function addToCart() {
    if (count > 0) {
      setCartCount((prev) => prev + count);
      setCount(0);
    }
  }

  function removeFromCart() {
    setCartCount(0);
  }

  function handleOverlay() {
    setOverlay(true);
  }

  function closeOverlay() {
    setOverlay(false);
  }

  return (
    <div className="main">
      <Navbar onClick={handleClick} count={cartCount} />
      <div className="content">
        <Product onClick={handleOverlay} />
        {overlay === true && (
          <div className="overlay">
            <div className="overlayContent">
              <Product showNavigation={true} closeOverlay={closeOverlay} />
            </div>
          </div>
        )}

        <div className="hero">
          <h5>SNEAKER COMPANY</h5>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className="description">
            These low-profile sneakers are your perfect casual wear
            companion.Featuring a durable rubber outer sole, they'll withstand
            everything the weather can offer.
          </p>
          <div className="price">
            <div className="discount">
              <p className="discountedPrice">$125.00</p>
              <p className="discountPercent">50%</p>
            </div>
            <p className="originalPrice">$250.00</p>
          </div>
          <div className="cartSetters">
            <div className="counter">
              <button onClick={handleRemove}>
                <IoIosRemove className="countIcon" />
              </button>
              <p className="count">{count}</p>
              <button onClick={handleAdd}>
                <IoIosAdd className="countIcon" />
              </button>
            </div>
            <button className="cartBtn" onClick={addToCart}>
              <IoCartOutline />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {cart === true && <Cart count={cartCount} onClick={removeFromCart} />}
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Eleanor Opolo</a>.
      </div>
    </div>
  );
}

export default App;
