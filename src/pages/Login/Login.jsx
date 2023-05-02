import React, { useState } from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [showPassword, setShowPassword] = useState(false)


    const onSubmit = (data) => {
        const {email, password} = data;
        console.log(email, password)
    }

    return (
      <div className="container">
        <div className="row">
          <div
            className="col-10 col-md-6 p-5 mx-auto login rounded my-5"
            
          >
            <h2 className="text-center mb-2 fw-semibold opacity-75">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    aria-label="Text input with checkbox"
                    {...register("password", {
                      required: "required",
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
                      className={ showPassword? "text-danger" : "text-dark"}
                      style={{cursor: "pointer"}}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>
              </div>
              {errors.password && (
                <p role="alert" className="alert alert-danger my-2 p-2">
                  {errors.password.message}
                </p>
              )}
              <div className="">
                <p className="">
                  New to this website?{" "}
                  <Link to="/register" className="link-opacity-75-hover">
                    Register
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

export default Login;