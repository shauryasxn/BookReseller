import React from "react";

export default function Category() {
  return (
    <section className="arrivals" id="arrivals">
      <h1 className="heading">
        {" "}
        <span>Category</span>{" "}
      </h1>

      <div className="swiper arrivals-slider">
        <div className="swiper-wrapper">
          <a href="#" className="swiper-slide box">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-1.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Semester 1</h3>
            </div>
          </a>

          <a href="#" className="swiper-slide box">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-4.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Semester 2</h3>
            </div>
          </a>

          <a href="#" className="swiper-slide box">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-6.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Semester 3</h3>
            </div>
          </a>

          <a href="#" className="swiper-slide box">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-7.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Semester 4</h3>
            </div>
          </a>
        </div>
      </div>

      <div className="swiper arrivals-slider">
        <div className="swiper-wrapper">
          <a href="#" className="swiper-slide box">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-8.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Semester 5</h3>
            </div>
          </a>

          <a href="#" className="swiper-slide box">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-9.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Semester 6</h3>
            </div>
          </a>

          <a href="#" className="swiper-slide box">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-10.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Semester 7</h3>
            </div>
          </a>

          <a href="#" className="swiper-slide box">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book3.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Semester 8</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
