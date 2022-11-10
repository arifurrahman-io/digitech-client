import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ServiceCard from '../Home/ServiceCard';
import { Helmet } from 'react-helmet';


const Services = () => {
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://digitech-server.vercel.app/all-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return <div>
            <button type="button" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Loading...
            </button>
        </div>
    }

    return (
        <div className='py-8'>
            <Helmet>
                <title>Services | GigiTech</title>
            </Helmet>
            <h2 className='text-4xl font-bold py-3 md:py-6 lg:py-10'>Top {services?.length} services</h2>
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