import React, { useContext, useEffect, useState } from "react";
import './Chef.css'
import SingleChef from "../SingleChef/SingleChef";
import FadeLoader from "react-spinners/FadeLoader";
import { useNavigation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Chef = () => {
  const {setPreloader} = useContext(AuthContext)
    const [chef, setChef] = useState([]);
    // console.log(chef)
     const navigation = useNavigation();
     if (navigation.state === "idle") {
       setPreloader(false);
     }
    


    useEffect(()=> {
        fetch("https://flaming-wings-assignment-10-imoncoc.vercel.app/chef")
        // fetch("http://localhost:5000/chef")
          .then((res) => res.json())
          .then((data) => {
            setChef(data);
            setPreloader(false);
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
