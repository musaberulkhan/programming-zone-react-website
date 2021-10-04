import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import useCourses from '../../../hooks/useCourses';
import Course from '../../Course/Course';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
    const [courses] = useCourses();
    let history = useHistory();

    const handleShowAllCourses = () => {
        history.push('/courses');
    }

    return (
        <div className="FeaturedCourses container">
            <h2 className="mt-5 section-title">Featured Courses</h2>
            <div className="display-featured-courses">
                {
                    courses.slice(0, 4).map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button onClick={() => handleShowAllCourses()} className="btn px-5 py-2 show-all-courses">Show All Courses</button>
            </div>

        </div>
    );
};

export default FeaturedCourses;