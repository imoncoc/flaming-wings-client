import React from 'react';
import './SingleChef.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUtensils } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazy-load";

const SingleChef = ({singleChef}) => {
    const {
      experience,
      id,
      likes,
      name,
      numRecipes,
      picture,
      profilePicture,
      role,
    } = singleChef;
    // console.log(experience)



    return (
      <>
        <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
          <div className="card shadow">
            <LazyLoad height={"100%"}>
              <img src={picture} alt={name} className="card-img-top" />
            </LazyLoad>
            <div className="card-body text-center customer-card-body">
              <LazyLoad height={"100%"}>
                <img
                  src={profilePicture}
                  className="customer-img rounded-circle"
                  alt="customer image"
                />
              </LazyLoad>
              <div className="card-title">
                <h5 className="customer-name text-capitalize chef-title">
                  {name}
                </h5>
              </div>
              <h6 className="customer-job text-capitalize chef-role">{role}</h6>
              <p className="customer-quote text-center mx-auto text-muted">
                Chef {name} been working in the culinary industry for over{" "}
                <span className="chef-title fw-semibold">{experience}</span>{" "}
                years.
              </p>

              <div className="d-flex justify-content-center">
                <p className="me-4">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="me-2 chef-icon"
                  />
                  {numRecipes} Recipes
                </p>
                <p>
                  <FontAwesomeIcon icon={faHeart} className="me-2 chef-icon" />
                  {likes} Likes
                </p>
              </div>

              <Link to={`/chef/${id}`}>
                <button className="btn home-btn w-100">View Recipe</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default SingleChef;