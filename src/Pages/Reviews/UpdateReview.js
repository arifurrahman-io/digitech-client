import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {

    const review = useLoaderData();


    return (
        <div>
            <h3>Please Edit : {review.review}</h3>
        </div>
    );
};

export default UpdateReview;