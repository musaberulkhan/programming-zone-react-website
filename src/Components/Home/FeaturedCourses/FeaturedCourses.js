import React from 'react';
import { useHistory } from "react-router-dom";
import useCourses from '../../../hooks/useCourses';
import Course from '../../Course/Course';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
    // -----------  Use Custom Hooks and History   -----------
    const [courses] = useCourses();
    let history = useHistory();

    // -----------  Handle Show All Courses Button   -----------
    const handleShowAllCourses = () => {
        history.push('/courses');
    }

    // -----------  Handle View Details Button   -----------
    const handleViewDetailsClick = (courseId) => {
        history.push(`coursedetails/${courseId}`)
    }

    return (
        // -----------  Featured Courses   ------------
        <div className="FeaturedCourses container">
            {/* -----------  Title   ------------ */}
            <h2 className="mt-5 section-title">Featured Courses</h2>

            {/* ------------ Display Featured Courses in Gridview   ------------ */}
            <div className="display-featured-courses">
                {
                    //----------- Map Courses and display course in card   -----------
                    courses.slice(0, 4).map(course => <Course 
                        key={course.id} 
                        course={course}
                        handleViewDetailsClick = {handleViewDetailsClick}
                        ></Course>)
                }
            </div>

            {/* ------------ Show All Courses Button  ------------ */}
            <div className="d-flex justify-content-center mt-4">
                <button onClick={() => handleShowAllCourses()} className="btn px-5 py-2 show-all-courses">Show All Courses</button>
            </div>

        </div>
    );
};

export default FeaturedCourses;