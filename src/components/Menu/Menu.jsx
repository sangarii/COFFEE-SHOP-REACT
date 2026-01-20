import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu" id="menu">
      <h2 className="mainText">
        OUR <span className="highlightText">MENU</span>
      </h2>
      <article className="menu-items">
        <section className="menu-card">
          <figure className="menu-img">
            <img src="src/images/menu-coffee-img1.png" alt="" />
          </figure>
          <h3>Tasy and healty</h3>
          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
          <a href="" className="btn">
            Add To Cart
          </a>
        </section>

        <section className="menu-card">
          <figure className="menu-img">
            <img src="src/images/menu-coffee-img2.png" alt="" />
          </figure>
          <h3>Tasy and healty</h3>
          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
          <a href="" className="btn">
            Add To Cart
          </a>
        </section>

        <section className="menu-card">
          <figure className="menu-img">
            <img src="src/images/menu-coffee-img3.png" alt="" />
          </figure>
          <h3>Tasy and healty</h3>
          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
          <a href="" className="btn">
            Add To Cart
          </a>
        </section>

        <section className="menu-card">
          <figure className="menu-img">
            <img src="src/images/menu-coffee-img4.png" alt="" />
          </figure>
          <h3>Tasy and healty</h3>
          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
          <a href="" className="btn">
            Add To Cart
          </a>
        </section>

        <section className="menu-card">
          <figure className="menu-img">
            <img src="src/images/menu-coffee-img5.png" alt="" />
          </figure>
          <h3>Tasy and healty</h3>
          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
          <a href="" className="btn">
            Add To Cart
          </a>
        </section>

        <section className="menu-card">
          <figure className="menu-img">
            <img src="src/images/menu-coffee-img6.png" alt="" />
          </figure>
          <h3>Tasy and healty</h3>
          <h3>
            $15.99
            <span className="price">$20.99</span>
          </h3>
          <a href="" className="btn">
            Add To Cart
          </a>
        </section>
      </article>
    </div>
  );
};

export default Menu;
