import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from '../Components/List'
import Home from '../Components/Home/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import SignIn from '../Components/SignIn/SignIn'
import AddReview from '../Components/AddReview/AddReview'
import UpdateReview from '../Components/UpdateReview/UpdateReview'


function AllRoutes() {

  return (
          <Routes>
                
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={
                <List/>
                } />
                <Route exact path="/aboutUs" element={<AboutUs />} />
                <Route exact path="/signIn" element={<SignIn />} />
                <Route exact path="/edit-Review/:_id" element={<UpdateReview />} />
                <Route exact path="/add-review/:productId" element={<AddReview />} />
                
          </Routes>
  )
}

export default AllRoutes