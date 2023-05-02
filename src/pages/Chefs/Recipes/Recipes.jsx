import React, { useState } from 'react';
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Recipes.css'

const Recipes = ({recipe}) => {
    console.log(recipe)
    const {
      instructions,
      ratings,
      strMeal,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5
    } = recipe;
    const [fold, setFold] = useState(true);
    // console.log(instructions);
    return (
      <div className="col-10 col-md-6 col-lg-4 mx-auto my-5">
        <div
          className="card p-3 shadow bg-body-tertiary border-0 mx-auto"
          style={{ width: "22rem" }}
        >
          <img src={recipe.strMealThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title">
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                Ingredient: {strIngredient1}, {strIngredient2}, {strIngredient3}
                , {strIngredient4}, {strIngredient5}
              </li>
            </ul>
            <Link href="#" className="nav-link tea-color-primary fw-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Recipes;