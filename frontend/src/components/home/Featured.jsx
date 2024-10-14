import React from "react";
import { useEffect, useState } from "react";
import Swiper from "swiper";
import axios from "axios";

export default function Featured() {
  const [allBooks, setAllBooks] = useState([]); // [state, function] = useState(initialState)

  useEffect(() => {
    axios.get("http://localhost:5555/books").then((response) => {
      console.log(response.data.data);
      setAllBooks(response.data.data);
    });
  }, []);

  let featuredBooks = allBooks.filter(
    (book) => book.isFeatured === true && !book.isSold
  );

  return (
    <section className="featured" id="featured">
      <h1 className="heading">
        {" "}
        <span>featured books</span>{" "}
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {featuredBooks.map((book) => {
          return (
            <div key={book._id} className="swiper featured-slider ">
              <div className="swiper-wrapper">
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-eye"></a>
                  </div>
                  <div className="image flex justify-center">
                    <a href="./product.html">
                      {" "}
                      <img src={book.coverImage} alt="" />{" "}
                    </a>
                  </div>
                  <div className="content">
                    <h3>{book.title}</h3>
                    <h3>{`Rs ${book.cost}`}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
