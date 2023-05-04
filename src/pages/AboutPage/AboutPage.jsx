import React from 'react';
import './AboutPage.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useNavigation } from 'react-router-dom';

const AboutPage = () => {
  const { setPreloader } = useContext(AuthContext);
  const navigation = useNavigation();
  if (navigation.state === "idle") {
    setPreloader(false);
  }
    return (
      <div className="bg-about">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto d-flex justify-content-center align-items-center" style={{height: "95vh"}}>
              <h2 className='text-white'>Coming Soon....
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutPage;