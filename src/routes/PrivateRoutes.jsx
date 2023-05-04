import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import FadeLoader from "react-spinners/FadeLoader";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
      return (
        <div
          className="col d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <FadeLoader color="#e67e22" />
        </div>
      );
    }
    if (user) {
      return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;