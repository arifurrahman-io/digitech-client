import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewCard from './ReviewCard';


const Reviews = () => {
    const { user } = useContext(AuthContext);
    const { displayName, photoURL, email } = user;
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email]);

    return (
        <div className='my-10'>
            <div className='bg-sky-200 p-10 rounded-xl flex justify-center align-middle shadow-md mx-auto'>
                <img src={photoURL} className="rounded-full w-24" alt="" />
                <div className='my-auto ml-5 text-xl font-semibold'>
                    <h2>{displayName}</h2>
                    <h2>{email}</h2>
                    <h3>Number of Reviews : 0{reviews.length}</h3>
                </div>
            </div>
            <table className="table w-full my-5">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Your Review</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews?.length && reviews.map(rev => <ReviewCard
                            key={rev._id} rev={rev}></ReviewCard>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default Reviews;