import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div className='min-h-screen'>
          <Banner />
          <About />
          <Work />
        </div>
    );
};

export default Home;