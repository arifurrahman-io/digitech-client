import React, { useState } from 'react';

const ReviewCard = ({ rev }) => {


    const { _id, image, title, review } = rev;

    const [displayReview, setdisplayReview] = useState(rev);


    const handleDelete = () => {
        const agree = window.confirm(`Are you sure you want to delete, ${title}`)
        if (agree) {
            fetch(`https://digitech-server.vercel.app/myreviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Review Deleted!')
                        const remainingUsers = displayReview
                            .filter(usr => usr._id !== _id);
                        setdisplayReview(remainingUsers);
                    }
                });
        }
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} className="w-24" alt="" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{review}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
                <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(rev)}>Delete</button>
            </th>
        </tr>
    );
};

export default ReviewCard;