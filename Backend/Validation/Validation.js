const Joi = require('joi');

// Define Joi schema for review validation
const reviewSchema = Joi.object({
    reviewer_name: Joi.string().required(),
    review_content: Joi.string().required(),
    rating: Joi.number().integer().min(1).max(5).required(),
    review_date: Joi.date().iso().required()
});

// Validation function
const validateReview = (reviewData) => {
    return reviewSchema.validate(reviewData, { abortEarly: false });
};

module.exports = validateReview;