import React, { useRef } from 'react';
import Pdf from "react-to-pdf";
import './Blog.css'
import { createRef } from 'react';
import { useNavigation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Blog = () => {
      const {setPreloader} = useContext(AuthContext)
      const ref = createRef();
      const options = {
        orientation: "landscape",
        unit: "px",
        format: [window.innerWidth * 0.55, window.innerHeight],
      };
      const navigation = useNavigation();
      if(navigation.state === 'idle'){
        setPreloader(false);
      }



    return (
      <div>
        <div className="App text-center mt-5">
          <Pdf 
            targetRef={ref}
            filename="blog.pdf"
            options={options}
            x={0.5}
            y={0.5}
            scale={1}
          >
            {({ toPdf }) => (
              <button className="btn home-btn" onClick={toPdf}>
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
        <div ref={ref} style={{ width: "100%", height: "100%" }}>
          <div className="container">
            <div className="row">
              <div className="col text-center mb-3 my-5">
                <h1 className="text-uppercase color-mainDark">FAQ Section</h1>
                <div className="title-underline my-3 bg-secondary mx-auto">
                  <div className="title-underline__center"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10 my-5 mx-auto">
                <div className="accordion " id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        #1 The differences between uncontrolled and controlled
                        components.
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <strong className="active">
                          Uncontrolled and Controlled Components:{" "}
                        </strong>
                        Uncontrolled components are simple, flexible, and do not
                        have any predefined structure or interface, while
                        controlled components are designed with a specific
                        structure and interface, and are meant to be used in a
                        particular way. Controlled components are often used in
                        complex systems, where it is important to ensure
                        consistency and reliability.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        #2 How to validate React props using PropTypes?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <strong className="active">
                          Validate React props using PropTypes:{" "}
                        </strong>
                        To validate React props using PropTypes, import the
                        PropTypes library, define the expected prop types for
                        your component using a propTypes object, and use the
                        props in your component as usual. This helps prevent
                        errors and ensures that your component is used
                        correctly.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        #3 The difference between nodejs and express js.
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <strong className="active">Nodejs and Express: </strong>
                        Express is a minimal and flexible node. js web
                        application framework, providing a robust set of
                        features for building single and multi-page, and hybrid
                        web applications. On the other hand, Node. js is
                        detailed as "A platform built on Chrome's JavaScript
                        runtime for easily building fast, scalable network
                        applications".
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        #4 What is a custom hook, and why will you create a
                        custom hook?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <strong className="active">Custom hook: </strong>
                        Custom hooks are created to solve the problem of code
                        duplication and share common logic between components.
                        If you find yourself duplicating the same logic in
                        multiple components, it's a good sign that you should
                        consider creating a custom hook. Creating custom hooks
                        can help improve code reusability and maintainability,
                        as well as make code easier to read and understand.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;