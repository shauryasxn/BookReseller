import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [cost, setCost] = useState(0);
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPhone, setSellerPhone] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    axios
      .get("http://localhost:5555/auth/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setSellerName(res.data.name);
        setSellerEmail(res.data.email);
        setSellerPhone(res.data.phone);

        const data = {
          title,
          author,
          publishYear,
          description,
          coverImage,
          cost,
          sellerName: res.data.name,
          sellerEmail: res.data.email,
          sellerPhone: res.data.phone,
        };

        axios
          .post("http://localhost:5555/books", data)
          .then(() => {
            setLoading(false);
            enqueueSnackbar("Book Created successfully", {
              variant: "success",
            });
            navigate("/");
          })
          .catch((error) => {
            setLoading(false);
            enqueueSnackbar("Error", { variant: "error" });
            console.log(error);
          });
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Image URL</label>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Cost</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;