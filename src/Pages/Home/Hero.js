import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.bihongo.net/wp-content/uploads/2022/11/bigstock-Repair-motherboard-in-electron-135850715-1024x683-1.jpg")`, borderRadius: '20 px' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">I am Arifur Rahman from Bangladesh, an electrical and electronic engineer. I am here to resolve your mobile phone's technical problems</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;