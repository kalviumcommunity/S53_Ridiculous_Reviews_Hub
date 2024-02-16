
import React, {useEffect} from 'react';
import './Product.css';
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineReviews } from "react-icons/md";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Grid, GridItem } from '@chakra-ui/react'



function Product({ product }) {
    const { name, brand, category, description, average_rating, ridiculous_reviews, images } = product;

    <h3 className="title">
        Most visited products
    </h3>

    return (

        <div className=' grid_main'>

  

            <section data-aos="fade-up" className="main container section">

                {/* <div className='secTitle'>
                    <div className="title">
                    <h3 data-aos="fade-right">Category:- {category}</h3>
                    </div>
                </div> */}

                <div className="secContent">
                    <div className='singleProduct' key={name}>
                        <div className="imageDiv">
                            <img src={images} alt="image not available" />
                        </div>

                        <div className="productInfo">

                                <div className="brand">
                                    <p className='brand'>{brand}</p>
                                </div>

                                <span className="productName flex">
                                    <LiaProductHunt className='icon' />
                                    <span className="name">{name}</span>
                                </span>

                                

                                <div className="fees flex">
                                    <div className="grade">
                                    <span>Average Rating <small className='small'>+{average_rating}</small></span>
                                    </div>

                                </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        Reviews <MdOutlineReviews className='icon'/>
                                    </button>
                                

                        </div>
                    </div>

                </div>
            
            
            
            
            
            
            
            
            {/* <h2>{name}</h2>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <p>Average Rating: {average_rating}</p>
        <img src={images} alt="" /> */}
            {/* <div className="reviews">
                <h3>Ridiculous Reviews</h3>
                {ridiculous_reviews.map((review, index) => {
                    return (
                        <>
                        
                        <div key={index} className="review">
                        <p>Reviewer: {review.reviewer_name}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Review Date: {review.review_date}</p>
                        <p>Review Content: {review.review_content}</p>
                        </div>
                        
                        </>
                        )})}
                    </div> */}
        </section>
        </div>


    );
}

export default Product;

                     