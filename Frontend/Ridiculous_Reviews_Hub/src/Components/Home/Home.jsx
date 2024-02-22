import React, {useEffect, useState} from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css'
import video1 from '../../assets/homeVideo.mp4'

//React icons
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";



export const Home = () => {

    const [ user, setUser ] =useState({
        username: "",
        password: ""
    })

    const [ cookie, setCookies ] = useCookies(["access_token"])
    
    //Function to handle the submit
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        for (const key in user) {
            if (!user[key]) {
                alert(`Please fill in ${key.replace('_', ' ')}`);
                return; 
            }
        }

        try{
            const response = await axios.post(`https://s53-ridiculous-reviews-hub.onrender.com/auth/login`, user)
            alert("User logged in Sucessfully")
            console.log('User logged successfully', response.data);
            setUser({
                username: "",
                password: ""
            })

            setCookies("access_token", response.data.token);
            setCookies("username", response.data.username)
            window.localStorage.setItem("userId", response.data.userId)

            // window.location.reload();
        } catch (error) {
            console.log(error)
        }
    
    
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value})
    }

    //Function for scroll animation
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="home">
            <div className="overlay"></div>
                <video src={video1} muted autoPlay loop type="video/mp4"></video>

                <div className="homeContent container">
                    <div className="textDiv">
                        <span data-aos="fade-up" className="smallText">OUR REVIEWS</span>
                        <h1 data-aos="fade-up" className="homeTitle">
                            Explore Humour With Us
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit} data-aos="fade-up" className="cardDiv grid">
                        <h2>Log In Form</h2>
                        <div className="usernameInput">
                            <label htmlFor="username">USERNAME</label>
                            <div className="input flex">
                                <input onChange={handleChange} type="text" placeholder="Enter username" name="username" />
                                <FaRegUserCircle className="icon" />
                            </div>                            
                        </div>
                        <div className="passwordInput">
                            <label htmlFor="password">PASSWORD</label>
                            <div className="input flex">
                                <input onChange={handleChange} type="password" placeholder="Enter password" name="password" />
                                <RiLockPasswordLine className="icon" />
                            </div>
                        </div>

                        <div className="logIn flex">
                            <CiLogin className="icon" />
                            <button type="submit" ><span><p style={{color: "black"}}>Log In</p></span></button>
                        </div>
                    </form>

                    <div data-aos="fade-up" className="homeFooterIcons flex">
                        <div className="rightIcons flex">
                            <FiFacebook className="icon" />
                            <AiOutlineInstagram className="icon" />
                            <SiTripadvisor className="icon" />
                        </div>

                        <div className="leftIcons flex">
                            <BsListTask className="icon" />
                            <TbApps className="icon" />
                        </div>
                    </div>
                    
                </div>
        </section>
    )
}

export default Home