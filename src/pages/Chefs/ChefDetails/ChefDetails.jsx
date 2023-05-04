import React, { useEffect, useState } from 'react';
import './ChefDetails.css'
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Recipes from '../Recipes/Recipes';
import Swal from "sweetalert2";
import ErrorPage from '../../ErrorPage/ErrorPage';
import "react-lazy-load-image-component/src/effects/blur.css";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
  // console.log(props)
  const {id} = useParams()
  // console.log(id)
  const [chef, setChef] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [bookmark, setBookmark] = useState(false);
  // console.log(chef, recipes)
  // const [imgLoad, setImgLoad] = useState(false);

  const handleBookMark = ()=>{
    setBookmark(!bookmark)
    if (bookmark) {
      Swal.fire("Oops!", "Chef Remove From Bookmark!", "error");
    } else {
      Swal.fire("Success!", "Successfully added into Bookmark!", "success");
    }
  }

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

  //  useEffect(() => {
  //    const img = new Image();
  //    img.onload = () => {
  //      setImgLoad(true);
  //    };
  //    img.src = fullChefData?.chefPhoto;
  //    setImgLoad(false);
  //  }, [fullChefData?.chefPhoto]);

   if(chef.length > 0){
    <ErrorPage></ErrorPage>
   }

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
              <LazyLoad height={"100%"} >
                <img
                  className="img-fluid w-100 h-100 rounded"
                  src={chef.profilePicture}
                  alt=""
                />
              </LazyLoad>
              {/* <LazyLoadImage
                src={chef?.profilePicture}
                className="img-fluid w-100 h-100 rounded"
                loading="lazy"
                effect="blur"
                alt="Chef"
                placeholderSrc={chef?.profilePicture.blurhash}
              /> */}
            </div>
            <div className="col-10 col-lg-5 mx-auto my-5 text-start chefDetails-bg p-5 rounded d-flex justify-content-center align-items-center">
              <div className="div">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="chefDetails-name">{chef.name}</h2>
                  <p
                    className={
                      bookmark
                        ? "chefDetails-icon"
                        : "chefDetails-icon text-muted "
                    }
                    onClick={handleBookMark}
                    title={
                      !bookmark
                        ? "Added into Bookmark?"
                        : "Remove From Bookmark?"
                    }
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Tooltip on bottom"
                  >
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
                  Chef {chef.name} been working in the culinary industry for
                  over {chef.experience} years.
                </p>
                <p className="chefDetails-p">
                  <span className="chefDetails-color-primary">About:</span>{" "}
                  {chef.details}
                </p>
                <p className="chefDetails-p">
                  <span className="chefDetails-color-primary">Likes:</span> More
                  then {chef.likes} peoples likes {chef.name} Recipes
                </p>
                <p className="chefDetails-p">
                  <span className="chefDetails-color-primary">Country: </span>
                  {chef.country}
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