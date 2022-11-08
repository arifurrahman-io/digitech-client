import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://digitech-server.vercel.app/all-services')
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
        </div>
    );
};

export default Services;