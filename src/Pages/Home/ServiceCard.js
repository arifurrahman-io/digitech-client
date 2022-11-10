import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { _id, image, title, description, price } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><PhotoProvider><PhotoView src={image}><img src={image} alt="" className='h-80' /></PhotoView></PhotoProvider></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4 className='text-2xl'>${price}</h4>
                <p>{description.slice(0, 100) + '...'}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-sm btn-outline btn-warning"><FaLongArrowAltRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;