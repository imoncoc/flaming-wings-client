import React, { useEffect, useState } from 'react';
import './CustomerReview.css'
import LazyLoad from 'react-lazy-load';
import { useNavigation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const CustomerReview = () => {
  const [images, setImages] = useState([])
  // console.log(images)
  const {setPreloader} = useContext(AuthContext);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    setPreloader(false)
  }


  useEffect(()=>{
    fetch(
      "https://flaming-wings-assignment-10-imoncoc.vercel.app/recipe/allImages"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setPreloader(false);
      })
      .catch((error) => console.log(error));
  }, [])
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
              <p className="text-uppercase review-sub-text">Testimonials</p>
              <h2 className="review-title">
                Once you try it, you can't go back
              </h2>
              {/* Item 1 */}
              <div className="row">
                <div className="col-10 col-lg-6 mx-auto my-3">
                  <div>
                    <img
                      src="https://i.ibb.co/YckG58y/customer-4.jpg"
                      alt=""
                      className="img-fluid review-img"
                    />
                    <figure>
                      <blockquote className="blockquote">
                        <p className="review-text">
                          Great cooking class! Learned a lot and had fun. Thanks
                          Flaming Wings!
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mt-3 review-author">
                        Dave Bryson
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-10 col-lg-6 mx-auto my-3">
                  <div>
                    <img
                      src="https://i.ibb.co/SwJtP2G/ben.jpg"
                      alt=""
                      className="img-fluid review-img"
                    />
                    <figure>
                      <blockquote className="blockquote">
                        <p className="review-text">
                          Highly recommend Flaming Wings for cooking classes.
                          Instructors are knowledgeable and fun.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mt-3 review-author">
                        Ben Hadley
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-10 col-lg-6 mx-auto my-3">
                  <div>
                    <img
                      src="https://i.ibb.co/8BpBSvB/steve.jpg"
                      alt=""
                      className="img-fluid review-img"
                    />
                    <figure>
                      <blockquote className="blockquote">
                        <p className="review-text">
                          Attended a class at Flaming Wings and left feeling
                          inspired to cook more. Great experience!
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mt-3 review-author">
                        Steve Miller
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-10 col-lg-6 mx-auto my-3">
                  <div>
                    <img
                      src="https://i.ibb.co/93WQrqh/customer-6.jpg"
                      alt=""
                      className="img-fluid review-img"
                    />
                    <figure>
                      <blockquote className="blockquote">
                        <p className="review-text">
                          Flaming Wings' cooking class was fantastic. I enjoyed
                          the hands-on learning and can't wait to try out my new
                          skills.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mt-3 review-author">
                        Hannah Smith
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery */}
            <div className="col-10 col-md-6 mx-auto">
              <div className="row">
                {images &&
                  images.slice(0, 15).map((image, indx) => (
                    <div
                      className="col-10 col-md-6 col-lg-4 mx-auto my-3 "
                      key={indx}
                    >
                      <div className="gallery-item">
                        <LazyLoad height={'100%'}>
                          <img
                            className="img-fluid gallery-img w-100 h-100"
                            src={image}
                            alt=""
                          />
                        </LazyLoad>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CustomerReview;