import React, { useContext } from 'react';
import './Header.css'
// import { NavLink } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProviders';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const { logOut, user } = useContext(AuthContext)
  console.log("Header", user)


  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };






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
              <li className="nav-item fw-semibold">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  About
                </NavLink>
              </li>
              {/* <li className="fw-semibold">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? " nav-link active" : "nav-link default"
                  }
                >
                  Login
                </NavLink>
              </li> */}
            </ul>
            {/* <div className="d-flex d-lg-flex align-items-baseline justify-content-between">
              <p className="text-dark me-4">
                <span className="me-2 phone-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                {user ? user?.email : "No User"}
              </p>
              {user ? (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              )}
            </div> */}

            {user ? (
              <div
                className="d-flex justify-content-around align-items-center text-center"
                style={{ width: "20rem" }}
              >
                <div className="d-flex align-items-center">
                  {user.photoURL ? (
                    <img
                      src={user?.photoURL}
                      title={
                        user.displayName ? user.displayName : "No Name Found!"
                      }
                      alt=""
                      className="user-img img-fluid"
                    />
                  ) : (
                    <div
                      className="phone-icon"
                      title={
                        user?.displayName ? user.displayName : "No Name Found!"
                      }
                    >
                      <FontAwesomeIcon className="user-icon" icon={faUser} />
                    </div>
                  )}
                  <p className="user-email my-2 ms-1 fw-semibold">
                    {user.email ? (
                      user.email
                    ) : (
                      <span style={{ fontSize: "0.8rem" }}>No Gmail.</span>
                    )}
                  </p>
                </div>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn home-btn">Login</button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    );
};

export default Header;