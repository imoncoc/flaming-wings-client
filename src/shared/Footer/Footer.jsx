import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faPhone,
  faEnvelope,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import wings_logo from '../../assets/images/flaming-wings-logo.jpg'
import './Footer.css'

const Footer = () => {
    return (
      <footer id="footer" className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 px-3 text-center my-5">
              <Link to="/" className="navbar-brand">
                <img
                  src={wings_logo}
                  className="img-fluid footer-logo"
                  alt=""
                />
                {/* <h3 className="text-white fw-semibold">Book Now</h3> */}
              </Link>
              <p className="text-muted my-3 text-center text-sm-start ">
                The ultimate destination for food lovers and aspiring chefs
                alike! Our website is dedicated to celebrating the art of
                cooking and the creativity of chefs around the world. Whether
                you're a professional chef or a home cook, you'll find plenty of
                inspiration, tips, and recipes on our site to take your cooking
                skills to the next level.
              </p>
              <a
                href="#"
                className="text-wing-primary service-link text-capitalize"
              >
                read more
                <span className="ms-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-5 px-3 text-center my-5 mx-auto">
              <div className="row">
                <div className="col text-center mb-3">
                  <h1 className="text-uppercase text-white">contact us</h1>
                  <div className="title-underline my-3 bg-secondary mx-auto">
                    <div className="title-underline__center"></div>
                  </div>
                </div>
              </div>

              <div className="single-contact px-5 my-3 d-flex justify-content-between">
                <span className="text-wing-primary me-3">
                  <FontAwesomeIcon icon={faMap} />
                </span>
                <p className="text-white text-capitalize">
                  123 main street venice, CA 90020
                </p>
              </div>

              <div className="single-contact px-5 my-3 d-flex justify-content-between">
                <span className="text-wing-primary me-3">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <p className="text-white text-capitalize">+ 123 456 789</p>
              </div>

              <div className="single-contact px-5 my-3 d-flex justify-content-between">
                <span className="text-wing-primary me-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p className="text-white">imoncoc@gmail.com</p>
              </div>

              <div className="single-contact px-5 my-3 d-flex justify-content-between">
                <span className="text-wing-primary me-3">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <p className="text-white text-capitalize">
                  mon - sat 8:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;