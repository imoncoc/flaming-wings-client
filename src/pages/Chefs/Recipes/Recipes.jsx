import React, { useState } from 'react';
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Recipes.css'
import { Rating } from '@smastrom/react-rating';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from "sweetalert2";
import LazyLoad from 'react-lazy-load';


const Recipes = ({recipe}) => {
    // console.log(recipe)
    const {
      instructions,
      ratings,
      strMeal,
      strArea,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5
    } = recipe;
    const [fold, setFold] = useState(true);
    const [favorite, setFavorite] = useState(false);



    const handleFavorite = ()=> {
        setFavorite(!favorite)
        if(favorite){
            Swal.fire(
              "Oops!",
              "Recipe Remove From Favorite!",
              "error"
            );
        }
        else{
            Swal.fire(
              "Success!",
              "Successfully added into Favorite!",
              "success"
            );
        }
    }
    
    return (
      <div className="col-10 col-md-6 col-lg-4 mx-auto my-5">
        <div
          className="card p-3 shadow bg-body-tertiary border-0 mx-auto"
          style={{ width: "22rem" }}
        >
          <LazyLoad height={"100%"}>
            <img src={recipe.strMealThumb} className="card-img-top" alt="..." />
          </LazyLoad>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <p className="card-title">
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="strArea">{strArea} Food</p>
            </div>
            <h5 className="card-title">{strMeal}</h5>
            {fold ? (
              <>
                <span className="card-title">
                  {instructions.substring(0, 100)}....
                </span>
                <span className=" read-more-btn" onClick={() => setFold(!fold)}>
                  Read More
                </span>
              </>
            ) : (
              <>
                <span className="card-title">{instructions} &nbsp; &nbsp;</span>
                <span className="read-more-btn" onClick={() => setFold(!fold)}>
                  Read Less
                </span>
              </>
            )}
            <ul className="navbar-nav my-2">
              <li className="nav-item">
                Ingredient:{" "}
                <span className="ingredients">
                  {strIngredient1}, {strIngredient2}, {strIngredient3},{" "}
                  {strIngredient4}, {strIngredient5}
                </span>
              </li>
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={ratings && ratings}
                  readOnly
                />
                <span className="ms-2">{ratings}</span>
              </div>
              <FontAwesomeIcon
                className={
                  !favorite
                    ? "text-muted favorite-icon"
                    : "text-danger favorite-icon"
                }
                icon={faHeart}
                title={favorite ? "Favorite Recipe" : "Not Favorite Recipe"}
              />
            </div>
            <button
              className="btn home-btn w-100 mt-3"
              onClick={handleFavorite}
              disabled={favorite}
            >
              Favorite Recipe
            </button>
          </div>
        </div>
      </div>
    );
};

export default Recipes;