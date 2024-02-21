import React, {useState, useEffect} from 'react'
import { FaRegLaughSquint } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import AboutUs from '../AboutUs/AboutUs'
import Product from '../Product/Products';
import axios from 'axios'
import Home from '../Home/Home'
import SignIn from '../SignIn/SignIn'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('navBar')

  //function to toggle navbar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  //function to remove navbar
  const removeNav = () => {
    setActive('navBar')
  }

  return (
    <div className='navBarSection'>  

          <header className="header flex">

              <div className="logoDiv">
                  <a href="#" className="logo flex">   
                      <h1 style={{display: "flex", justifyContent: "space-between", width: "230px"}} ><FaRegLaughSquint className="icon" />   .Ridiculous Reviews Hub.</h1>
                  </a>
              </div>

              <div className={active} >
                <ul className="navLists flex">
                  <li className="navItem">
                    <Link className='navLink' to="/">Home</Link>
                  </li>
                  <li className="navItem">
                    <Link className='navLink' to="/products">Products</Link>
                  </li>
                  <li className="navItem">
                    <Link className='navLink' to="/aboutUs">AboutUs</Link>
                  </li>
                  <li className="navItem">
                  <Link className='navLink' to="/signIn">SignUp</Link>
                  </li>

                  <button className="btn">
                    <p><Link to="/">Log In</Link></p>
                  </button>
                </ul>

                <div onClick={removeNav} className="closeNavbar">
                  <AiFillCloseCircle className="icon" />
                </div>
              </div>

              <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon" />
              </div>

          </header>

    </div>
  )
}

export default Navbar