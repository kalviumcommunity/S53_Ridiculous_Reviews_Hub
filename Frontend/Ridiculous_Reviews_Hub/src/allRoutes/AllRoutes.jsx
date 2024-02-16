import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import List from '../Components/List'
import Home from '../Components/Home/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import SignIn from '../Components/SignIn/SignIn'


function AllRoutes() {

  return (
          <Routes>
                
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={
                <List/>
                } />
                <Route exact path="/aboutUs" element={<AboutUs />} />
                <Route exact path="/signIn" element={<SignIn />} />
                
          </Routes>
  )
}

export default AllRoutes