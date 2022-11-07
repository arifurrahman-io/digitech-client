import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.bihongo.net/wp-content/uploads/2022/11/wild-hero.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">I am Arifur Rahman from Bangladesh, a professional and intertional award winning wildlfe photographar </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;