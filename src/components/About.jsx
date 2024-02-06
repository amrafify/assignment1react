import React from "react";

export default function About() {
  return (
    <header className="text-white">
      <div className="about">
        <div className="container">
          <div className="row my-5">
            <div className="col-12">
              <h1 className="text-center text-white">ABOUT COMPONENT</h1>
              <div className="starIcon d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3"></div>
                <i className="fa-solid fa-star text-white"></i>
                <div className="line ms-3"></div>
              </div>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
