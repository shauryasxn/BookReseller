import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Our Locations</h3>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i>PICT, India{" "}
          </a>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> meshramgargi286@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> natanshi04@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> oswaldiya6@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> shail.s.pancholi@gmail.com{" "}
          </a>
          <img
            src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/worldmap.png"
            className="map"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
