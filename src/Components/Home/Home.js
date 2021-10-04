import React from 'react';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            {/* -------- Display Header and Featured Courses  -------- */}
            <Header></Header>
            <FeaturedCourses></FeaturedCourses>
        </div>
    );
};

export default Home;