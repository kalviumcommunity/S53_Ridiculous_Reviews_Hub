// Product.jsx
import React from 'react';
import '../Styles/product.css';

function Product({ product }) {
    const { name, brand, category, description, average_rating, ridiculous_reviews } = product;

    return (
        <div className="product">
            <h2>{name}</h2>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <p>Average Rating: {average_rating}</p>
            <div className="reviews">
                <h3>Ridiculous Reviews</h3>
                {ridiculous_reviews.map((review, index) => {
                return (
                    <div key={index} className="review">
                        <p>Reviewer: {review.reviewer_name}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Review Date: {review.review_date}</p>
                        <p>Review Content: {review.review_content}</p>
                    </div>
                )})}
            </div>
        </div>
    );
}

export default Product;
