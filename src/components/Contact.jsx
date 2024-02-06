import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contactUs">
        <div className="container">
          <div className="mb-5">
            <h1 className="text-center">CONATCT SECTION</h1>
            <div className="starIcon d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>
            <div>
              <form className="m-5">
                <input
                  type="text"
                  className="form-control p-3 "
                  placeholder="uesrName"
                />
                <input
                  type="text"
                  className="form-control p-3 "
                  placeholder="uesrAge"
                />
                <input
                  type="email"
                  className="form-control p-3 "
                  placeholder="uesrEmail"
                />
                <input
                  type="password"
                  className="form-control p-3 "
                  placeholder="uesrPassword"
                />
                <div className="text-center">
                  <button type="button" className="btn btn-success">
                    send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
