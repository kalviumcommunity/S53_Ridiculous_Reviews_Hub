import React, {useState, useEffect} from 'react'
import { useCookies } from "react-cookie"
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

//React icons
import { FaRegLaughSquint } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const [ cookies, setCookies ] = useCookies(["access_token"])
  const navigate = useNavigate()

  //function for logout
  const logout = () => {
    setCookies("access_token", "")
    setCookies("username", "")
    window.localStorage.removeItem('userId')
    navigate("/")
  }

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
                    {!cookies.access_token ? <p><Link to="/">Log In</Link></p> : <p onClick={logout}>Logout</p> } 
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