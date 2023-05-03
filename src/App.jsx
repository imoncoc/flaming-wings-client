import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer/Footer';
import LoadingSpinner from './shared/LoadingSpinner/LoadingSpinner';


function App() {
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000)})

  return (
    <>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App
