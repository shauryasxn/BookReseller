import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log("Error getting book details:", error);
      });
  }, [id]);

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const handleBuy = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to buy this book?"
    );
    if (isConfirmed) {
      try {
        await axios.get(`http://localhost:5555/books/buy/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        navigate("/books/buy");
        alert("Book bought successfully");
      } catch (error) {
        console.log("Error buying book:", error);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/2 p-8">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-7xl font-bold text-gray-800 mb-6">
              {book.title}
            </h1>
            <p className="text-3xl text-gray-700 mb-6">{book.description}</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-gray-800">
                ${book.cost}
              </span>
            </div>
            <p className="text-3xl text-gray-600 mb-4">
              <span className="font-bold">Author:</span> {book.author}
            </p>
            <p className="text-3xl text-gray-600 mb-4">
              <span className="font-bold">Published:</span> {book.publishYear}
            </p>
            <p className="text-3xl text-gray-600 mb-4">
              <span className="font-bold">Seller Name:</span> {book.sellerName}
            </p>
            <p className="text-3xl text-gray-600 mb-4">
              <span className="font-bold">Seller Email:</span>{" "}
              {book.sellerEmail}
            </p>
            <p className="text-3xl text-gray-600 mb-8">
              <span className="font-bold">Seller Phone:</span>{" "}
              {book.sellerPhone}
            </p>
            <button
              onClick={handleBuy}
              className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl"
            >
              Confirm Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
