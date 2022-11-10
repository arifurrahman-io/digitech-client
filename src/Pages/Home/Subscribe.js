import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-gray-100 rounded-xl flex flex-col justify-center p-6 my-16'>
            <span className="text-3xl font-semibold text-center mb-3">Subscribe for Newsletter</span>
            <div className="form-control mx-auto">
                <label className="input-group">
                    <span className='bg-rose-500 text-white'>Email</span>
                    <input type="text" placeholder="info@site.com" className="input input-bordered" />
                </label>
                <button className='btn mt-3 btn-outline btn-warning'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;