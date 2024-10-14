import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/books/BooksTable";
import BooksCard from "../components/books/BooksCard";
import { useSnackbar } from 'notistack';
import { BiUserCircle, BiShow } from "react-icons/bi";
import BookModal from "../components/books/BookModal";

export default function SellBook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const authToken = localStorage.getItem("authToken");
  const { enqueueSnackbar } = useSnackbar();
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      return;
    }
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleView = async (bookID) => {
    setShowModal(true);
  }
  const handleEdit = async (bookID) => {
    navigate(`/books/edit/${bookID}`);
  }
  const handleDelete = async (bookID) => {
    
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (isConfirmed) {
    axios
      .delete(`http://localhost:5555/books/${bookID}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
    }
  }

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
      <div className="flex justify-end mb-4">
        <Link to="/report">
          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
            Report
          </button>
        </Link>
          <span style={{ margin: "0 5px" }}></span>
        <Link to="/books/create">
          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
            Create Book
          </button>
        </Link>
      </div>
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
                    <button className="btn" onClick={() => handleView(book._id)}>
                      View
                    </button>
            <span style={{ margin: "0 5px" }}></span>
                    <button className="btn" onClick={() => handleEdit(book._id)}>
                      Edit
                    </button>
            <span style={{ margin: "0 5px" }}></span>
                    <button className="btn" onClick={() => handleDelete(book._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              {showModal && (
              <BookModal book={book} onClose={() => setShowModal(false)} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}