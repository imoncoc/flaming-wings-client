import React from 'react';
import { MoonLoader } from 'react-spinners';
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
    return (
      //   <div className="active fs-1  d-flex justify-content-center align-items-center">
      //     L{" "}
      //     <div className="spinner-border text-info" role="status">
      //       <span className="visually-hidden">Loading...</span>
      //     </div>
      //     ading...
      //   </div>

      <div className="d-flex justify-content-center align-items-center">
        <MoonLoader color="#cf711f" />
      </div>
    );
};

export default LoadingSpinner;