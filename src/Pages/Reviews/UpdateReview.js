import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UpdateReview = () => {

    const storedReview = useLoaderData();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/myreviews';


    const [review, setReview] = useState(storedReview);


    const handleUpdateReview = event => {
        event.preventDefault();
        console.log(review);


        fetch(`https://digitech-server.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Updated Successfully');
                    event.target.reset();
                    navigate(from, { replace: true });
                }
            });

    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { review }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div>
            <Helmet>
                <title>Update Review | GigiTech</title>
            </Helmet>
            <form onSubmit={handleUpdateReview} className="card-body">
                <div className="form-control">
                    <textarea onChange={handleInputChange} name='review' defaultValue={storedReview.review} className="textarea textarea-info" placeholder="write something about the service" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;