import React from 'react';

const ReviewRow = ({ r }) => {

    const { user, review } = r;

    return (
        <div className="card card-side bg-base-100 p-6 shadow my-3">
            <figure className='w-1/4'><img src={user?.photoURL} className="rounded-full w-16" alt="user" /></figure>
            <div className="card-body w-3/4">
                <h2 className="card-title">{user?.displayName}</h2>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewRow;