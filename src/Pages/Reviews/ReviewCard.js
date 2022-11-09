import React from 'react';

const ReviewCard = ({ rev }) => {


    const { image, title, review } = rev;

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
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ReviewCard;