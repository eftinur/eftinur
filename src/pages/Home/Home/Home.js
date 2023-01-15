import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import About from '../Banner/About/About';

const Home = () => {
    return (
        <div>
          <Banner />
          <About />
          <Footer />
        </div>
    );
};

export default Home;