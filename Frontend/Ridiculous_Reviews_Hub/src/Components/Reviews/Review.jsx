// ReviewModal.jsx
import React from 'react';
import Modal from 'react-modal';
import './Reviews.css';
import { Link } from 'react-router-dom'
import { IoCloseCircleOutline } from "react-icons/io5";


import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import axios from 'axios';

function ReviewModal({ isOpen, reviews, onRequestClose, productId }) {

    const handleDelete = async (reviewId) => {
        try {
            await axios.delete(`https://s53-ridiculous-reviews-hub.onrender.com/productRoute/delete-review/${reviewId}`);
            window.location.reload();
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="overlay"
            contentLabel="Reviews Modal"
            ariaHideApp={false}
        >
            <div className="modal-content">
                <button className="btn" ><Link to={`/add-review/${productId}`}>+ Add Review</Link></button>
                <button className="close-btn btn" onClick={onRequestClose}><IoCloseCircleOutline className='icon' /></button>
                <h3>Ridiculous Reviews</h3>
                <div className="reviews-list">
                    {reviews.map((review, index) => (


                        <Accordion allowToggle  key={index}>
                            
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' color='black'>
                                            Review {index+1}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} key={index} className="review" >
                                    <p>Reviewer: {review.reviewer_name}</p>
                                    <p>Rating: {review.rating}</p>
                                    <p>Review Date: {review.review_date}</p>
                                    <p>Review Content: {review.review_content}</p>

                                    <div className="btns">
                                        <button className='btn'><Link to={`/edit-review/${review._id}`}>EDIT</Link></button>
                                        <button className='btn' onClick={(e) => handleDelete(review._id)}>DELETE</button>
                                    </div>

                                </AccordionPanel>

                            </AccordionItem>

                        </Accordion>

                    ))}
                </div>
            </div>
        </Modal>
    );
}

export default ReviewModal;
