import React from 'react';

const ReviewRow = ({ myReview }) => {

    const { title, image, review } = myReview;

    return (
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{review}</p>
        </div>
    );
};

export default ReviewRow;