import React, { useState } from 'react';

const ReviewCard = ({ rev }) => {


    const { image, title, review } = rev;

    const [displayReview, setdisplayReview] = useState(rev);


    const handleDelete = rev => {
        const agree = window.confirm(`Are you sure to delete ${rev.title}`);
        if (agree) {
            fetch(`http://localhost:5000/myreviews/${rev._id}`, {
                method: 'DELETE'
            })
                .than(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingUsers = displayReview
                            .filter(usr => usr._id !== rev._id);
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