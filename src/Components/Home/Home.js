import React from 'react';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import Header from './Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FeaturedCourses></FeaturedCourses>
        </div>
    );
};

export default Home;