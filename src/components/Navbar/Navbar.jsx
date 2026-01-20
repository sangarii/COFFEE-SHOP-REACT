import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showShopping, setShowShopping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleShopping = () => {
    setShowShopping(!showShopping);
  };

  const handleClose = () => {
    setShowShopping(false);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="nav">
      <nav className="navbar">
        <img src="src/images/logo.png" alt="" />
        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#product">Products</a>
          </li>
          <li>
            <a href="#review">Review</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#blog">Blogs</a>
          </li>
        </ul>
        <div className="nav-icons">
          <FaSearch className="nav-icon" onClick={handleSearch} />
          <FaShoppingCart className="nav-icon" onClick={handleShopping} />
        <IoMenu className="menu-icon" onClick={toggleSidebar} />
        </div>
      </nav>

      <div className="divider"></div>
      {showSearch && (
        <section className="searchBar">
          <input
            type="text"
            className="inputSearchText"
            placeholder="search here..."
            autoFocus
          />
          <FaSearch className="inputSearchIcon" />
        </section>
      )}
      {showShopping && (
        <section className="shoppingItems">
          <div className="items">
            <article className="dataItems">
              <figure className="imageIcons">
                <img
                  src="src/images/nav-coffee-img1.png"
                  alt=""
                  className="imageIcon"
                />
              </figure>
              <div className="itemsText">
                <div className="itemHead">Card Item 03</div>
                <div className="itemBody">$14.78/-</div>
              </div>
              <IoClose className="closeIcon" onClick={handleClose} />
            </article>

            <article className="dataItems">
              <figure className="imageIcons">
                <img
                  src="src/images/nav-coffee-img2.png"
                  alt=""
                  className="imageIcon"
                />
              </figure>
              <div className="itemsText">
                <div className="itemHead">Card Item 02</div>
                <div className="itemBody">$18.79/-</div>
              </div>
              <IoClose className="closeIcon" onClick={handleClose} />
            </article>

            <article className="dataItems">
              <figure className="imageIcons">
                <img
                  src="src/images/nav-coffee-img3.png"
                  alt=""
                  className="imageIcon"
                />
              </figure>
              <div className="itemsText">
                <div className="itemHead">Card Item 01</div>
                <div className="itemBody">$15.99/-</div>
              </div>
              <IoClose className="closeIcon" onClick={handleClose} />
            </article>

            <article className="dataItems">
              <figure className="imageIcons">
                <img
                  src="src/images/nav-coffee-img4.png"
                  alt=""
                  className="imageIcon"
                />
              </figure>
              <div className="itemsText">
                <div className="itemHead">Card Item 04</div>
                <div className="itemBody">$16.89/-</div>
              </div>
              <IoClose className="closeIcon" onClick={handleClose} />
            </article>

            <a href="" className="btn card">
              Checkout Now
            </a>
          </div>
        </section>
      )}
      {/* Mobile Menu */}
      {showSidebar && (
        <>
           {/* <div className="overlay" onClick={toggleSidebar}></div> */}
        <aside className="sidebar">
          <div className="close-bar">
          <IoClose className="close-sidebar" onClick={toggleSidebar} />

          </div>
         <ul className="sidebar-menu">
              <li><a href="#home" className="sidebar-item" onClick={toggleSidebar}>Home</a></li>
              <li><a href="#about"className="sidebar-item" onClick={toggleSidebar}>About</a></li>
              <li><a href="#menu"className="sidebar-item" onClick={toggleSidebar}>Menu</a></li>
              <li><a href="#product"className="sidebar-item" onClick={toggleSidebar}>Products</a></li>
              <li><a href="#review"className="sidebar-item" onClick={toggleSidebar}>Review</a></li>
              <li><a href="#contact"className="sidebar-item" onClick={toggleSidebar}>Contact</a></li>
              <li><a href="#blog"className="sidebar-item" onClick={toggleSidebar}>Blogs</a></li>
            </ul>
        </aside>
        </>
      
      )}
    </div>
  );
};

export default Navbar;
