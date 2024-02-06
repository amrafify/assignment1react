import React from "react";

export default function FooterItems() {
  return (
    <div className="footeritem p-5">
      <div className="container p-5 ">
        <div className="row">
          <div className="col-md-4 text-center text-white">
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center text-white">
            <h2>AROUND THE WEB</h2>
            <div className="icons">
              <i class="fa-brands fa-facebook mx-1 icon"></i>
              <i class="fa-brands fa-twitter mx-1 icon"></i>
              <i class="fa-brands fa-linkedin mx-1 icon"></i>
              <i class="fa-solid fa-globe mx-1 icon"></i>
            </div>
          </div>
          <div className="col-md-4 text-center text-white">
            <h2>ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
