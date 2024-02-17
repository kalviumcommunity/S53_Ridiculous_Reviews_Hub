import React, { useState, useEffect } from 'react';
import './Product.css';
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineReviews } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReviewModal from '../Reviews/Review';

function Product({ product }) {
    const { name, brand, category, description, average_rating, ridiculous_reviews, images, _id } = product;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='product-container'>
            <section data-aos="fade-up" className="main container section">
                <div className='secTitle'>
                    <div className="title">
                        <h3 data-aos="fade-right">Category:- {category}</h3>
                    </div>
                </div>
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
                            <button className='btn flex' onClick={() => setShowModal(true)}>
                                Reviews <MdOutlineReviews className='icon'/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <ReviewModal
                isOpen={showModal}
                reviews={ridiculous_reviews}
                productId={_id}
                onRequestClose={() => setShowModal(false)}
            />
        </div>
    );
}

export default Product;
