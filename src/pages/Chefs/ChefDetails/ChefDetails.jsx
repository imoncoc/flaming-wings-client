import React, { useEffect, useState } from 'react';
import './ChefDetails.css'
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Recipes from '../Recipes/Recipes';

const ChefDetails = ({props}) => {
  console.log(props)
  const {id} = useParams()
  console.log(id)
  const [chef, setChef] = useState([]);
  const [recipes, setRecipes] = useState([]);


  console.log(chef)
  console.log(recipes)

   useEffect(()=>{
    fetch(
      `https://flaming-wings-assignment-10-imoncoc.vercel.app/chef/${id}`
    )
    .then((res)=> res.json())
    .then((data) => {
      setChef(data.chef)
      setRecipes(data.recipes)
    })
    .catch((error) => console.log(error));
   }, [])
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col text-center mb-3 my-5">
              <h1 className="text-uppercase color-mainDark">Chef Details</h1>
              <div className="title-underline my-3 bg-secondary mx-auto">
                <div className="title-underline__center"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10 col-lg-5 mx-auto my-5">
              <img
                className="img-fluid w-100 h-100 rounded"
                src={chef.profilePicture}
                alt=""
              />
            </div>
            <div className="col-10 col-lg-5 mx-auto my-5 text-start chefDetails-bg p-5 rounded d-flex justify-content-center align-items-center">
              <div className="div">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="chefDetails-name">{chef.name}</h2>
                  <p className="chefDetails-icon" title="Bookmark it?">
                    <FontAwesomeIcon icon={faBookmark} />
                  </p>
                </div>
                <p className="chefDetails-p">
                  <span className="chefDetails-color-primary">Role:</span>{" "}
                  {chef.role}{" "}
                </p>
                <p className="chefDetails-p">
                  <span className="chefDetails-color-primary">Recipes:</span>{" "}
                  {chef.numRecipes} popular recipes
                </p>
                <p className="chefDetails-p">
                  <span className="chefDetails-color-primary">Experience:</span>{" "}
                  Chef John has been working in the culinary industry for over{" "}
                  {chef.experience} years.
                </p>
                <p className="chefDetails-p">
                  <span className="chefDetails-color-primary">About:</span>{" "}
                  {chef.details}
                </p>
                <p className="chefDetails-p">
                  <span className="chefDetails-color-primary">Likes:</span> More
                  then {chef.likes} peoples likes {chef.name} Recipes
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col text-center mb-3 my-5">
              <h1 className="text-uppercase color-mainDark">Chef Recipes</h1>
              <div className="title-underline my-3 bg-secondary mx-auto">
                <div className="title-underline__center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {recipes &&
              recipes.map((recipe) => (
                <Recipes key={recipe.idMeal} recipe={recipe}></Recipes>
              ))}
          </div>
        </div>
      </>
    );
};

export default ChefDetails;