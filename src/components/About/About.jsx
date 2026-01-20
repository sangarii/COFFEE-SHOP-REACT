import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="mainText">
        ABOUT <span className="highlightText">US</span>
      </h2>

      <section className="about-card">
        <article className="about-img">
          <img src="src/images/about-img.png" alt="about-image" />
        </article>
        
        <article className="about-info">
          <h3>What Makes Our Coffee Special?</h3>
          <p>
            Lorem ipsum dolor sit,Amet consectetur adipisicing elit. laboriosam
            aspernatur est quaerat omnis exercitationem dolore voluptas sapiente
            a aut vitae nihil natus sint lure, aperiam commodi quidem vero
            temporo autem.
          </p>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis
            dicta vel autem rerum lusto sit quia corporis explicabo sunt fugiat?
          </p>
          <a href="" className="btn">Learn More</a>
        </article>
      </section>
    </div>
  );
};

export default About;
