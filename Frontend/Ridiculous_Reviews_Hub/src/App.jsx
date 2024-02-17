import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
<<<<<<< HEAD
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
=======
import Navbar from './Components/Navbar'
import Product from './Components/Products';
import data from './Components/fakedata.json'
>>>>>>> main

function App() {

  const [ users, setUsers] = useState([])

  useEffect(() => {
    axios.get('process.env.mongoURI')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])

  return (  
    <>
      <Navbar />
      <Product data={data} />
    </>
  )
}

export default App
