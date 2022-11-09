import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewSection from '../Reviews/ReviewSection';


const Service = () => {
    const { loading } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, image, price, description, time, warranty, payment, urgentPolicy
    } = service;

    if (loading) {
        return <div>
            <p type="text" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Loading...
            </p>
        </div>
    }

    return (
        <div>
            <div className='py-10 md:w-3/5 mx-auto'>
                <h2 className='text-3xl font-semibold my-3'>{title}</h2>
                <img src={image} className="rounded-lg my-3 w-full" alt="" />
                <h4 className='text-2xl font-semibold my-3'>Price: ${price}</h4>
                <p className='text-justify my-3'>{description}</p>
                <ul className='list-disc list-inside'>
                    <li><span className='font-bold text-purple-500'>Time Needed:</span> {time}</li>
                    <li><span className='font-bold text-purple-500'>Warranty:</span> {warranty}</li>
                    <li><span className='font-bold text-purple-500'>Payment Policy:</span> {payment}</li>
                    <li><span className='font-bold text-purple-500'>Urgent Policy:</span> {urgentPolicy}</li>
                </ul>
            </div>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Service;