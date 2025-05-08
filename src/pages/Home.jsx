import React from 'react';
import Carousel from '../components/Carousel';
import Promotion from '../components/Promotion';
import Highlights from '../components/Highlights';
const Home = () => {
    return (
        <div>
             <Carousel />
             <Highlights />
             <Promotion></Promotion>
        </div>
    );
};

export default Home;