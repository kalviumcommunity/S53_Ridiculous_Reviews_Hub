import React, {useEffect} from "react";
import './Home.css'
import video1 from '../../assets/homeVideo.mp4'
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'


export const Home = () => {

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

                    <div data-aos="fade-up" className="cardDiv grid">
                        <h2>Log In Form</h2>
                        <div className="usernameInput">
                            <label htmlFor="username">USERNAME</label>
                            <div className="input flex">
                                <input type="text" placeholder="Enter username" />
                                <FaRegUserCircle className="icon" />
                            </div>                            
                        </div>
                        <div className="passwordInput">
                            <label htmlFor="password">PASSWORD</label>
                            <div className="input flex">
                                <input type="text" placeholder="Enter password" />
                                <RiLockPasswordLine className="icon" />
                            </div>
                        </div>

                        <div className="logIn flex">
                            <CiLogin className="icon" />
                            <span>Log In</span>
                        </div>
                    </div>

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