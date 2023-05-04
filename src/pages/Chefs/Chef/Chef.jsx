import React, { useEffect, useState } from "react";
import './Chef.css'
import SingleChef from "../SingleChef/SingleChef";
import FadeLoader from "react-spinners/FadeLoader";
import { useNavigation } from "react-router-dom";

const Chef = () => {
    const [chef, setChef] = useState([]);
    // console.log(chef)
     const navigation = useNavigation();
     if (navigation.state === "loading") {
       return (
         <div
           className="col d-flex justify-content-center align-items-center"
           style={{ height: "60vh" }}
         >
           <FadeLoader color="#e67e22" />
         </div>
       );
     }
    


    useEffect(()=> {
        fetch("https://flaming-wings-assignment-10-imoncoc.vercel.app/chef")
        // fetch("http://localhost:5000/chef")
          .then((res) => res.json())
          .then((data) => {
            setChef(data);
          })
          .catch((error) => console.log(error));
    }, [])

  return (
    <div className="chef-bg">
      <div className="container">
        <div className="row">
          <div className="col text-center mb-3 my-5">
            <h1 className="text-uppercase color-mainDark">Our Chef</h1>
            <div className="title-underline my-3 bg-secondary mx-auto">
              <div className="title-underline__center"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {chef &&
            chef.map((singleChef) => (
              <SingleChef
                key={singleChef.id}
                singleChef={singleChef}
              ></SingleChef>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
