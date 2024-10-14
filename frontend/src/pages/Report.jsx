import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Report() {
  const [booksSold, setBooksSold] = useState(0);
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/report")
      .then((response) => {
        setBooksSold(response.data.booksSold);
        setReport(response.data.report);
      })
      .catch((error) => {
        console.log("Error fetching report:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Sales Report
        </h1>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden mb-12">
          <div className="px-8 py-6 bg-indigo-600 text-white flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Total Books Sold</h2>
            <span className="text-5xl font-bold">{booksSold}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {report.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <div className="px-8 py-6 bg-indigo-600 text-white flex items-center justify-between">
                <h2 className="text-2xl font-semibold truncate">
                  {`${book.title} (Rs ${book.cost})`}
                </h2>
                <span className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold">
                  Sold
                </span>
              </div>

              <div className="px-8 py-6 flex justify-between">
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    Seller Details
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Name:{" "}
                    <span className="font-semibold">
                      {book.sellerName || "N/A"}
                    </span>
                  </p>
                  <p className="text-gray-600 text-lg">
                    Email:{" "}
                    <span className="font-semibold">
                      {book.sellerEmail || "N/A"}
                    </span>
                  </p>
                  <p className="text-gray-600 text-lg">
                    Phone:{" "}
                    <span className="font-semibold">
                      {book.sellerPhone || "N/A"}
                    </span>
                  </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    Buyer Details
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Name:{" "}
                    <span className="font-semibold">{book.buyerName}</span>
                  </p>
                  <p className="text-gray-600 text-lg">
                    Email:{" "}
                    <span className="font-semibold">{book.buyerEmail}</span>
                  </p>
                  <p className="text-gray-600 text-lg">
                    Phone:{" "}
                    <span className="font-semibold">{book.buyerPhone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
