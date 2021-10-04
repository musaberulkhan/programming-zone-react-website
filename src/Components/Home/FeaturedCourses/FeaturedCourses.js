import React, { useEffect } from 'react';
import useCourses from '../../../hooks/useCourses';
import Course from '../../Course/Course';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
    const [courses] = useCourses();

    return (
        <div className="FeaturedCourses container">
            <h2 className="mt-5 section-title">Featured Courses</h2>
            <div className="display-featured-courses">
                {
                    courses.slice(0, 4).map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>

        </div>
    );
};

export default FeaturedCourses;