import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='min-h-screen'>
          <Banner />
          <About />
          <Work />
          <Contact />
        </div>
    );
};

export default Home;