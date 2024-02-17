import React, { useState } from 'react';
import axios from 'axios';
import './AddReview.css';
import { useParams } from 'react-router-dom';

function AddReview() {

    const { productId } = useParams();
    const [review, setReview] = useState({
        reviewer_name: "",
        rating: "",
        review_date: "",
        review_content: "",
    })

    const submitReview = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/add-review/${productId}`, review);
            alert("Review Added")
            console.log('Review submitted successfully', response.data); 
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value} = event.target;
        setReview({...review, [name]: value})
    }

    console.log(review)

    return (
        <div className="add-review-container">
            <h2>Create a New Review</h2>
            <form onSubmit={submitReview}>
                <label>
                    Reviewer Name:
                    <input onChange={handleChange} type="text" name="reviewer_name" />
                </label>
                <br />
                <label>
                    Rating:
                    <input onChange={handleChange} type="number" name="rating" />
                </label>
                <br />
                <label>
                    Review Date:
                    <input onChange={handleChange} type="date" name="review_date" />
                </label>
                <br />
                <label>
                    Review Content:
                    <textarea onChange={handleChange} name="review_content" />
                </label>
                <br />
                <button className='btn' type="submit">Submit Review</button>
            </form>
        </div>
    );
}

export default AddReview;
