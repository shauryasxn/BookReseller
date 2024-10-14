import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/books/BooksTable";
import BooksCard from "../components/books/BooksCard";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
// import Category from "../components/home/Category";
import Review from "../components/home/Review";
import Footer from "../components/home/Footer";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
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

  return (
    <>
      <Header />
      <Hero />
      <Featured />
      {/* <Category /> */}
      <Review />
      {/* <Footer /> */}

      {/* {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )} */}
    </>
  );
};

export default Home;
