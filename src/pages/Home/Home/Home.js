import React from 'react';
import Banner from '../../Intro/Banner/Banner';
import Intro from '../../Intro/Intro';
import Footer from '../../Shared/Footer/Footer';
import WorkItems from '../../WorkItems/WorkItems';

const Home = () => {
    return (
        <div>
          <Banner />
          <Intro />
          <WorkItems />
          <Footer />
        </div>
    );
};

export default Home;