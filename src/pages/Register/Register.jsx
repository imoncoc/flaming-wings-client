import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

     const {createUser} = useContext(AuthContext)

     const {
       register,
       formState: { errors },
       handleSubmit,
       reset
     } = useForm();

     const onSubmit = (data) => {
       console.log(data.name, data.email, data.password, data.confirmPassword);
       const { email, password, name, confirmPassword } = data;
      //  console.log(email, password, name, confirmPassword);
       createUser(email, password)
       .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        reset();
       })
       .catch((error) => {
        console.log(error)
       })
     };

     const passwordRegex =
       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;




    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 p-5 my-5 mx-auto login rounded">
            <h2 className="text-center mb-2 fw-semibold opacity-75">
              Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  {...register("name", {
                    required: "required",
                  })}
                />
                {errors.name && (
                  <p role="alert" className="alert alert-danger my-2 p-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors.email && (
                  <p role="alert" className="alert alert-danger my-2 p-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  {...register("password", {
                    required: "required",
                    minLength: {
                      value: 8,
                      message: "min length is 8",
                    },
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password must contain at least one uppercase letter, one number, and one special character",
                    },
                  })}
                  type="password"
                />
                {errors.password && (
                  <p role="alert" className="alert alert-danger my-2 p-2">
                    {errors.password.message}
                  </p>
                )}
              </div> */}

              {/* Password */}
              <label className="form-label">Password</label>
              <div className="input-group mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  aria-label="Text input with checkbox"
                  {...register("password", {
                    required: "required",
                    minLength: {
                      value: 8,
                      message: "min length is 8",
                    },
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password must contain at least one uppercase letter and lowercase, one number, and one special character",
                    },
                  })}
                />
                <div className="input-group-text">
                  {/* <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    value="password"
                    aria-label="Checkbox for following text input"
                    onClick={() => setShowPassword(!showPassword)}
                  /> */}
                  <FontAwesomeIcon
                    icon={faEye}
                    className={showPassword ? "text-danger" : "text-dark"}
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
              {errors.password && (
                <p role="alert" className="alert alert-danger my-2 p-2">
                  {errors.password.message}
                </p>
              )}

              {/* Confirm Password */}
              <label className="form-label">Confirm Password</label>
              <div className="input-group mb-3">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  aria-label="Text input with checkbox for Password"
                  {...register("confirmPassword", {
                    required: "required",
                    minLength: {
                      value: 8,
                      message: "min length is 8",
                    },
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password must contain at least one uppercase letter and lowercase, one number, and one special character",
                    },
                  })}
                />
                <div className="input-group-text">
                  {/* <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    value="confirmPassword"
                    aria-label="Checkbox for following text input"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  /> */}
                  <FontAwesomeIcon
                    icon={faEye}
                    className={
                      showConfirmPassword ? "text-danger" : "text-dark"
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
              </div>
              {errors.confirmPassword && (
                <p role="alert" className="alert alert-danger my-2 p-2">
                  {errors.confirmPassword.message}
                </p>
              )}

              <div className="">
                <p className="">
                  Already a User?{" "}
                  <Link to="/register" className="link-opacity-75-hover">
                    Login
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button type="submit" className="login-btn w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;