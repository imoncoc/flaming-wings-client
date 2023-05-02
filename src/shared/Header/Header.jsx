import React from 'react';
import './Header.css'
// import { NavLink } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-3 ">
          <Link to="/" className="navbar-brand">
            {/* <h3>Book Now</h3> */}
            <img
              src={"https://i.ibb.co/cgvpP9v/flaming-wings-logo.jpg"}
              alt=""
              className="img-fluid wings-logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item fw-semibold">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* {!user && (
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link default"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              )} */}
              <li className="nav-item fw-semibold">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="fw-semibold">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? " nav-link active" : "nav-link default"
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <div className="d-flex d-lg-flex align-items-baseline justify-content-between">
              <p className="text-white me-4">
                {/* <span className="me-2 phone-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                {user ? user?.displayName : "No User"} */}
                Hello User
              </p>
              <button className="btn btn-danger">Logout</button>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;