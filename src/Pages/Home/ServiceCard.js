import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {

    const { _id, image, title, decription, price } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4 className='text-2xl'>${price}</h4>
                <p>{decription.slice(0, 100) + '...'}</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`}>
                        <button className="btn btn-sm btn-outline btn-warning"><FaLongArrowAltRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;