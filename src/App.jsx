import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
