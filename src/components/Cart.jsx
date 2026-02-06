import React from "react";
import ProductOne from "../images/image-product-1.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";

function Cart({ count, onClick }) {
  return (
    <div className="cart">
      <div className="cartHead">
        <h3>Cart</h3>
        <hr />
      </div>
      {count > 0 ? (
        <div className="check">
          <div className="item">
            <img
              src={ProductOne}
              alt="Fall Limited Edition Sneakers "
              className="img"
            />
            <div className="desc">
              <p className="title">Fall Limited Edition Sneakers</p>
              <div className="prices">
                <p className="pr">$125.00 x {count}</p>
                <p className="total">${125 * count}</p>
              </div>
            </div>
            <RiDeleteBin6Line className="deleteIcon" onClick={onClick} />
          </div>
          <button className="checkout">Checkout</button>
        </div>
      ) : (
        <p className="empty">This cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
