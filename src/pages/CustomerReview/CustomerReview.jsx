import React from 'react';
import './CustomerReview.css'

const CustomerReview = () => {
    return (
      <div className="review-bg">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-3 my-5">
              <h1 className="text-uppercase color-mainDark">
                Customer's Review
              </h1>
              <div className="title-underline my-3 bg-secondary mx-auto">
                <div className="title-underline__center"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10 col-md-6 mx-auto">
              <p className="text-uppercase">Testimonials</p>
              <h2>Once you try it, you can't go back</h2>
              {/* Item 1 */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
                <p>
                  Inexpensive, healthy and great-tasting meals, without even
                  having to order manually! It feels truly magical.
                </p>
              </div>
            </div>
            <div className="col-10 col-md-6 mx-auto"></div>
          </div>
        </div>
      </div>
    );
};

export default CustomerReview;