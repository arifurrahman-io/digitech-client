import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const ReviewSection = () => {

    const service = useLoaderData();
    const { _id, title, image } = service;

    const { user } = useContext(AuthContext);



    const [review, setReview] = useState({});
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?_id=${service._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [service._id]);


    const handleAddReview = event => {
        event.preventDefault();
        console.log(review);

        if (user?.email) {
            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Review Added Successfully');
                        event.target.reset();
                    }
                });
        }
    }
    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review, _id, title, image, user }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div>
            <div className='py-10 md:w-3/5 mx-auto'>
                <div>
                    <h3>Total Reviews: {reviews.length}</h3>
                    <div className='my-5'>
                    </div>
                </div>
                {
                    user?.email ?
                        <>
                            <div className="card w-full shadow bg-base-100 my-10">
                                <div className='flex justify-center align-middle mt-5'>
                                    <img src={user.photoURL} className='rounded-full w-14' alt="" />
                                    <h3 className='text-2xl my-auto mx-3'>{user.displayName}</h3>
                                </div>
                                <form onSubmit={handleAddReview} className="card-body">
                                    <div className="form-control">
                                        <textarea onBlur={handleInputBlur} name='review' className="textarea textarea-info" placeholder="write something about the service" required></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary" type='submit'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </> :
                        <><h2 className='text-2xl'>Please<Link to={'/signin'}><span className='btn btn-active btn-link text-2xl'>Login</span></Link>to review</h2></>
                }
            </div>
        </div>
    );
};

export default ReviewSection;