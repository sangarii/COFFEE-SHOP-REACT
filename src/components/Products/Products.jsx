import React from "react";
import "./Products.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
const Products = () => {
  return (
    <div className="products" id="product">
      <h2 className="mainText">
        LATEST <span className="highlightText">PRODUCT</span>
      </h2>
      <article className="product-items">
        <section className="product-card">
          <div className="product-icons">
            <FaShoppingCart className="product-icon" />
            <FaHeart className="product-icon" />
            <MdOutlineRemoveRedEye className="product-icon" />
          </div>
          <figure className="product-img">
            <img src="src/images/product-img1.png" />
          </figure>
          <h3>Fresh Coffee</h3>
          <div className="product-rate-icons">
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarHalf className="product-rate-icon" />
          </div>
          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
        </section>

         <section className="product-card">
          <div className="product-icons">
            <FaShoppingCart className="product-icon" />
            <FaHeart className="product-icon" />
            <MdOutlineRemoveRedEye className="product-icon" />
          </div>
          <figure className="product-img">
            <img src="src/images/product-img2.png" />
          </figure>
          <h3>Fresh Coffee</h3>
          <div className="product-rate-icons">
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarHalf className="product-rate-icon" />
          </div>

          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
        </section>

         <section className="product-card">
          <div className="product-icons">
            <FaShoppingCart className="product-icon" />
            <FaHeart className="product-icon" />
            <MdOutlineRemoveRedEye className="product-icon" />
          </div>
          <figure className="product-img">
            <img src="src/images/product-img3.png" />
          </figure>
          <h3>Fresh Coffee</h3>
          <div className="product-rate-icons">
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarPurple500 className="product-rate-icon" />
            <MdOutlineStarHalf className="product-rate-icon" />
          </div>

          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
        </section>
      </article>
    </div>
  );
};

export default Products;
