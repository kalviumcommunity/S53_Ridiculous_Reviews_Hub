import React, {useEffect} from 'react'
import './Footer.css'
import video2 from '../../assets/footerVideo.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import { FaRegLaughSquint, FaTripadvisor } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Footer() {

  //Function for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4" ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Find humour with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter the Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <FaRegLaughSquint className="icon" />   .Ridiculous Riviews Hub.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            We treasure your questions, feedback, and suggestions. Our dedication to improvement is fueled by your valuable input. Reach out anytime; we're eager to enhance your experience together.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          
          <div className="footerLinks grid">

            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="gropuTitle">
                SERVICES
              </span>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Critiques
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Satire
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Parody
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Laughable
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Humor
              </li>
            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="gropuTitle">
                INSURANCE
              </span>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Laughter
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Jokes
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Humour
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Wit
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Joviality
              </li>
            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="gropuTitle">
                PAYMENTS
              </span>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Chuckles
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Giggles
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Smiles
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Laughing
              </li>

              <li className="footerLists flex">
                <FiChevronRight className='icon' />
                Grin
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>Copyrights reserved by Nasir Qureshi</small>
            <small>Made with ❤️ by Nasir</small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer