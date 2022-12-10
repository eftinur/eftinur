import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className='bg-slate-700 flex justify-center'>
            <div className='banner w-3/4 text-left text-white flex flex-col justify-center text-7xl'>
                <h2>
                    Hello! I'm Nur
                </h2>
                <h2>
                    Front-end Dev
                </h2>
            </div>
        </section>
    );
};

export default Banner;