import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mb-3 my-5">
          <h1 className="text-uppercase color-mainDark">About US</h1>
          <div className="title-underline my-3 bg-secondary mx-auto">
            <div className="title-underline__center"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto col-md-6 text-center text-md-start my-5">
          <h1 className="text-capitalize ms-5 ms-md-0 text-start">
            about <strong className="banner-title">us</strong>
          </h1>
          <p className="my-4 text-muted w-75">
            At Flaming wings, we believe that cooking is more than just a
            practical skill – it's an art form that allows you to express your
            creativity and passion. That's why we're committed to providing an
            engaging and enjoyable learning experience that will inspire you to
            explore new flavors and techniques.
          </p>
          <Link to="/about">
            <button href="#" className="btn home-btn text-uppercase">
              explore
            </button>
          </Link>
        </div>
        <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
          <div className="about-img__container">
            <LazyLoad height={'100%'}>
              <img
                src="https://images.unsplash.com/photo-1571903244693-227d7733a917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="img-fluid"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
