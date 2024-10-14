import React, { useEffect } from "react";
import Swiper from "swiper";

export default function Hero() {
  useEffect(() => {
    const swiper = new Swiper(".books-slider", {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []); // Empty array as the second argument to run the effect only once

  return (
    <div>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>East Buy, West Sell</h3>
            <p>
              If you’re an Engineering student and need a books, PICTBOOKS has
              great deals on a wide range of books. Shop for these books from
              top authors and avail hugely discounted prices
            </p>
            <a href="http://localhost:5173/books/buy/" className="btn">
              Buy
            </a>
            <span style={{ margin: "0 5px" }}></span>
            <a href="http://localhost:5173/books/sell" className="btn">
              Sell
            </a>
          </div>

          <div className="swiper books-slider">
            <div className="swiper-wrapper">
              <a href="#" className="swiper-slide">
                <img
                  src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-1.png"
                  alt=""
                />
              </a>
              {/* Other swiper-slide elements */}
            </div>
            <img
              src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/stand.png"
              className="stand"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
