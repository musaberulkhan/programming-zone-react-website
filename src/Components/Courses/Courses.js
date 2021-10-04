import React from 'react';
import { useHistory } from 'react-router';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    // --------   Use Custom Hook and History   --------
    const [courses] = useCourses();
    let history = useHistory();

    // --------   Handle View Details Click Listener   --------
    const handleViewDetailsClick = (courseId) => {
        history.push(`coursedetails/${courseId}`)
    }

    return (
        // -------------  All Courses -------------
        <div className="Courses container">
            <h2 className="mt-5 section-title">All Courses</h2>

            {/* ----------    Courses Grid View    ------------ */}
            <div className="display-courses">
                {
                    // Map courses and Display all course
                    courses.map(course => <Course 
                        key={course.id} 
                        course={course}
                        handleViewDetailsClick = {handleViewDetailsClick}
                        ></Course>)
                }
            </div>            
        </div>

    );
};

export default Courses;