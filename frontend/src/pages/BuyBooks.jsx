import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

function BuyBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const authToken = localStorage.getItem("authToken");

  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      return;
    }
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        const availableBooks = response.data.data.filter(
          (book) => !book.isSold
        );
        setBooks(availableBooks);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleBuy = async (bookId) => {
    navigate(`/books/buy/${bookId}`);
  };
  if (!authToken) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Welcome
            </h1>
            <p className="mb-8 text-2xl text-gray-600 text-center">
              Please login to continue!
            </p>
            <div className="flex justify-center">
              <Link to="/books/login">
                <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <section className="featured" id="featured">
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => {
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

export default BuyBooks;
