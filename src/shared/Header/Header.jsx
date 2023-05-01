import React from 'react';
import './Header.css'
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import wings_logo from '../../assets/images/flaming-wings-logo.jpg'

const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-3">
          <Link to="/" className="navbar-brand">
            {/* <h3>Book Now</h3> */}
            <img src={wings_logo} alt="" className='img-fluid wings-logo'  />
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
              <li className="nav-item">
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
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link default"
                }
              >
                Login
              </NavLink>

              <li className="nav-item">
                <NavLink
                  to="/confirmBooking"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  Confirm Booking
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