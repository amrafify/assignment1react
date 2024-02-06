import React from "react";
import img1 from "../img/home.svg";

export default function Home() {
  return (
    <header className=" text-center text-white">
      <div className="col-md-4 m-auto">
        <img src={img1} className="w-50 mb-3" />
        <h1>START FRAMEWORK</h1>
        <div className="starIcon d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
}
