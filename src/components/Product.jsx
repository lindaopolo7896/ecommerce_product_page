import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

import ProductOneThumbNail from "../images/image-product-1-thumbnail.jpg";
import ProductTwoThumbNail from "../images/image-product-2-thumbnail.jpg";
import ProductThreeThumbNail from "../images/image-product-3-thumbnail.jpg";
import ProductFourThumbNail from "../images/image-product-4-thumbnail.jpg";

import ProductOne from "../images/image-product-1.jpg";
import ProductTwo from "../images/image-product-2.jpg";
import ProductThree from "../images/image-product-3.jpg";
import ProductFour from "../images/image-product-4.jpg";

function Product({ onClick, showNavigation = false, closeOverlay }) {
  const products = [
    {
      full: ProductOne,
      thumb: ProductOneThumbNail,
    },
    {
      full: ProductTwo,
      thumb: ProductTwoThumbNail,
    },
    {
      full: ProductThree,
      thumb: ProductThreeThumbNail,
    },
    {
      full: ProductFour,
      thumb: ProductFourThumbNail,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  function handleNext() {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  }

  return (
    <div className="images">
      <div className="imgContainer">
        <div className="navigation">
          {showNavigation && (
            <IoMdClose className="close show" onClick={closeOverlay} />
          )}

          {showNavigation && (
            <IoIosArrowBack className="navLeft show" onClick={handlePrev} />
          )}

          <img
            src={currentProduct.full}
            alt="shoes"
            className="navImg"
            onClick={onClick}
          />

          {showNavigation && (
            <IoIosArrowForward className="navRight show" onClick={handleNext} />
          )}
        </div>
      </div>

      <div className="displays">
        {products.map((product, index) => (
          <button
            key={index}
            className={`dispBtn ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={product.thumb} alt="shoes" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Product;
