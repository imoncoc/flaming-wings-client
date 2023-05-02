import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = ({recipe}) => {
    console.log(recipe)
    const { instructions, ratings } = recipe;
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
            <h5 className="card-title">{recipe.strMeal}</h5>
            <p className="card-text">
              There are many variations of passages of Lorem Ipsum available.
            </p>
            <Link href="#" className="nav-link tea-color-primary fw-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Recipes;