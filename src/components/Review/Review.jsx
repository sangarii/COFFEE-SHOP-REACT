import React from "react";
import "./Review.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
const Review = () => {
  return (
    <div className="review" id="review">
      <h2 className="mainText">
        CUSTOMER'S <span className="highlightText">REVIEW</span>
      </h2>
      <article className="review-items">
        <section className="review-card">
          <img src="src/images/review-img.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sit optio
            perferendis quarn quisquam mauires rem, tenetur vitae amet
            inventore, ad laborum a voluptate quis cum nisi beatae adipisci sunt
            dolorum.
          </p>
          <img src="src/images/review-profile-img1.png" alt="" className="profile-img" />
          <h3>John Deo</h3>
          <div className="review-rate-icons">
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarHalf className="review-rate-icon" />
          </div>
        </section>

          <section className="review-card">
          <img src="src/images/review-img.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sit optio
            perferendis quarn quisquam mauires rem, tenetur vitae amet
            inventore, ad laborum a voluptate quis cum nisi beatae adipisci sunt
            dolorum.
          </p>
          <img src="src/images/review-profile-img2.png" alt="" className="profile-img"/>
          <h3>John Deo</h3>
          <div className="review-rate-icons">
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarHalf className="review-rate-icon" />
          </div>
        </section>

          <section className="review-card">
          <img src="src/images/review-img.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sit optio
            perferendis quarn quisquam mauires rem, tenetur vitae amet
            inventore, ad laborum a voluptate quis cum nisi beatae adipisci sunt
            dolorum.
          </p>
          <img src="src/images/review-profile-img3.png" alt="" className="profile-img"/>
          <h3>John Deo</h3>
          <div className="review-rate-icons">
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarPurple500 className="review-rate-icon" />
            <MdOutlineStarHalf className="review-rate-icon" />
          </div>
        </section>
      </article>
    </div>
  );
};

export default Review;
