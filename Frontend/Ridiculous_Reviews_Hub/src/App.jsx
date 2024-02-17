import { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './Components/Navbar/Navbar'
// import Product from './Components/Product/Products';
// import Home from './Components/Home/Home'
// import SignIn from './Components/SignIn/SignIn'
// import AboutUs from './Components/AboutUs/AboutUs'
// import AddReview from './Components/AddReview/AddReview'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import AllRoutes from './allRoutes/AllRoutes';
import Footer from './Components/Footer/Footer';
// import data from './Components/fakedata.json'

function App() {


  return (
    <>
      <div>
        <Navbar />
        <AllRoutes/>
        <Footer />
      </div>
    </>
  )
}

export default App
