import React, { useState } from "react"; // Ensure useState is imported
import { useNavigate } from "react-router-dom";

export default function Header() {
  const authToken = localStorage.getItem("authToken");

  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const navigate = useNavigate(); // To redirect to the search results page

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    if (searchTerm.trim() !== "") {
      // Additional check to ensure searchTerm is not empty
      navigate(`books/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-1">
        <a className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYcznHBSRE-t4ljLJnDN3D0Aec6I6LOxIIn_NRzZoFw&s"
            alt="Logo"
            style={{ width: "56px", height: "56px", marginRight: "7px" }} // Adjusted size and spacing
          />
          PICTbooks
        </a>

          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
            />
            <button type="submit" className="fas fa-search"></button>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="./cart.html" className="fas fa-shopping-cart"></a>
            <div id="login-btn" className="fas fa-user"></div>
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <a href="./index.html">Home</a>
            <a href="#featured">Featured</a>
            <a href="#reviews">Reviews</a>
            {authToken ? (
              <a
                href="#"
                onClick={() => {
                  localStorage.removeItem("authToken");
                  window.location.reload();
                }}
              >
                Logout
              </a>
            ) : (
              <>
                <a href="/books/login">Login</a>
                <a href="./books/signUp">Signup</a>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
