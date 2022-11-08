import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://digitech-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-8'>
            <h2 className='text-4xl font-bold py-3 md:py-6 lg:py-10'>Top {services.length} services</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='mt-5 flex justify-center'>
                <Link to={'/services'}><button className="btn btn-outline btn-warning"> See All <FaLongArrowAltRight className='w-10' /></button></Link>
            </div>
        </div>
    );
};

export default Services;