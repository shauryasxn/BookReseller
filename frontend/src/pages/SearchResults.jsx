import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // To get the query from the URL
import axios from "axios"; // For making HTTP requests
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SearchResults() {
  const [results, setResults] = useState([]); // State to hold search results
  const location = useLocation(); // Get the current URL location

  useEffect(() => {
    const fetchData = async () => {
      const query = new URLSearchParams(location.search); // Parse the query string
      const searchTerm = query.get("query"); // Get the search term

      const response = await axios.get(
        `http://localhost:5555/books/search?title=${encodeURIComponent(
          searchTerm
        )}`
      );
      console.log(response.data);
      setResults(response.data.data); // Store the search results
    };

    fetchData(); // Fetch data when component is mounted or query changes
  }, []);

  return (
    <section className="featured" id="featured">
      <h2>Search Results:</h2>

      <div className="grid grid-cols-3 gap-4">
        {results.map((book) => {
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
                    <button className="btn" onClick={() => handleBuy(book._id)}>
                      Buy
                    </button>
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
