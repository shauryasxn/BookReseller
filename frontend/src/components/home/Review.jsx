import React from "react";

export default function Review() {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        {" "}
        <span>client's reviews</span>{" "}
      </h1>

      <div className="swiper reviews-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <img
              src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-1.png"
              alt=""
            />
            <h3>Ujjwal </h3>
            <p>
              First of all it customer service is excellent. We get all authored
              book for PICT. People should try here for affordable and
              best price.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div className="swiper-slide box">
            <img
              src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-2.png"
              alt=""
            />
            <h3>Mary</h3>
            <p>
              Best book store almost all books are available for prepartion of
              exam related or other books are available on reaonable price also.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div className="swiper-slide box">
            <img
              src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-6.png"
              alt=""
            />
            <h3>Siddhi </h3>
            <p>
              I love the product because it is very easy to find. The book are
              in really organized manner you can easily find the book you want.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
