import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs" id="blog">
      <h2 className="mainText">
        OUR <span className="highlightText">BLOGS</span>
      </h2>
      <article className="blog-item">
        <section className="blog-card">
          <figure className="blog-img">
            <img src="src/images/blogs-img1.png" alt="" />
          </figure>
          <h3>Tasty And refreshing Coffee</h3>
          <h4>By Admin / 1st may, 2021</h4>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. nisii,
            culpa.
          </p>
          <a href="" className="btn blog-btn">
            Read More
          </a>
        </section>

        <section className="blog-card">
          <figure className="blog-img">
            <img src="src/images/blogs-img2.png" alt="" />
          </figure>
          <h3>Tasty And refreshing Coffee</h3>
          <h4>By Admin / 1st may, 2021</h4>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. nisii,
            culpa.
          </p>
          <a href="" className="btn blog-btn">
            Read More
          </a>
        </section>

        <section className="blog-card">
          <figure className="blog-img">
            <img src="src/images/blogs-img3.png" alt="" />
          </figure>
          <h3>Tasty And refreshing Coffee</h3>
          <h4>By Admin / 1st may, 2021</h4>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. nisii,
            culpa.
          </p>
          <a href="" className="btn blog-btn">
            Read More
          </a>
        </section>
      </article>
    </div>
  );
};

export default Blogs;
