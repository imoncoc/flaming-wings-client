import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer/Footer';
import {Circle2} from 'react-preloaders';


function App() {

   

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* <Circle2 time={1500}></Circle2> */}
    </>
  );
}

export default App
