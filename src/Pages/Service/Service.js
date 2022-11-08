import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const service = useLoaderData();
    const { title, image, price, description, facilities
    } = service;
    return (
        <div className='py-10 md:w-3/5 mx-auto'>
            <h2 className='text-3xl font-semibold my-3'>{title}</h2>
            <img src={image} className="rounded-lg my-3 w-full" alt="" />
            <h4 className='text-2xl font-semibold my-3'>Price: ${price}</h4>
            <p className='text-justify my-3'>{description}</p>
            <ul className='list-disc list-inside'>
                <li><span className='font-bold text-purple-500'>Time Needed:</span> {facilities.time}</li>
                <li><span className='font-bold text-purple-500'>Warranty:</span> {facilities.warranty}</li>
                <li><span className='font-bold text-purple-500'>Payment Policy:</span> {facilities.payment}</li>
                <li><span className='font-bold text-purple-500'>Urgent Policy:</span> {facilities.urgentPolicy}</li>
            </ul>
        </div>
    );
};

export default Service;