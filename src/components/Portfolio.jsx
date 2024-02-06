import React from "react";
import img1 from "../img/proj1.png";
import img2 from "../img/proj2.png";
import img3 from "../img/proj3.png";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio ">
        <div className="container">
          <div className="porHead ">
            <h1 className="text-center">PORTFOLIO COMPONENT</h1>
            <div className="starIcon d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={img1} className="w-100" />
              </div>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={img1} className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img src={img2} className="w-100" />
              </div>

              <div
                className="modal fade"
                id="exampleModal2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={img2} className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <img src={img3} className="w-100" />
              </div>

              <div
                className="modal fade"
                id="exampleModal3"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={img3} className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={img1} className="w-100" />
              </div>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={img1} className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img src={img2} className="w-100" />
              </div>

              <div
                className="modal fade"
                id="exampleModal2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={img2} className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <img src={img3} className="w-100" />
              </div>

              <div
                className="modal fade"
                id="exampleModal3"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <img src={img3} className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
