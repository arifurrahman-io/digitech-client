import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found | GigiTech</title>
            </Helmet>
            <h2>Page Not Found</h2>
        </div>
    );
};

export default ErrorPage;