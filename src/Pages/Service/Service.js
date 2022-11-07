import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const service = useLoaderData();
    const { title, image, price, decription } = service;
    return (
        <div className='py-10 md:w-3/5 mx-auto'>
            <h2 className='text-3xl font-semibold my-3'>{title}</h2>
            <img src={image} className="rounded-lg my-3" alt="" />
            <h4 className='text-2xl font-semibold my-3'>Price: ${price}</h4>
            <p className='text-justify my-3'>{decription}</p>
        </div>
    );
};

export default Service;