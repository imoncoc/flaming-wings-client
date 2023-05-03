import React from 'react';
import './Home.css'
import Chef from '../Chefs/Chef/Chef';
import CustomerReview from '../CustomerReview/CustomerReview';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import Pricing from '../AboutUs/AboutUs';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
      <>
        <div className="wings-home-bg">
          {/* <div className="container-fluid ">
          <div className="row">
            <div className="col-12 mx-auto text-white">
              <h2 className=''>This is Food</h2>
            </div>
          </div>
        </div> */}

          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto">
                <div
                  className="text-white text-center d-flex justify-content-center align-items-center"
                  style={{ height: "90vh" }}
                >
                  <div>
                    <h2 className="fs-1 fw-bold home-title">
                      Welcome to Flaming Wings
                    </h2>
                    <p className="fs-4 fw-semibold home-description">
                      We believe that cooking is a form of art that brings
                      people together, and we're committed to sharing our love
                      of food with the world.
                    </p>
                    <button className="btn home-btn">Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Chef></Chef>
        <AboutUs></AboutUs>
        <CustomerReview></CustomerReview>
      </>
    );
};

export default Home;