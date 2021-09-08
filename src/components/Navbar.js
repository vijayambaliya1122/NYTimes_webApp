import React from "react";
import "../assets/css/style.css";

export default function Navbar() {
  return (
    <div>
      <nav style={{ background: "#40E0D0" }} className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            style={{ boxShadow: "none" }}
            className="navbar-toggler text-light custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand custom-a" href="/">
            NY Times Most Popular
          </a>
          <i className="fas fa-search text-light fafa"></i>
          <i className="fas fa-ellipsis-v text-light fafa"></i>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a style={{color : 'white'}} className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex custom-form">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
