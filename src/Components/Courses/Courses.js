import React from 'react';
import { useHistory } from 'react-router';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses] = useCourses();
    let history = useHistory();

    const handleViewDetailsClick = (courseId) => {
        history.push(`coursedetails/${courseId}`)
    }

    return (
        <div className="Courses container">
            <h2 className="mt-5 section-title">All Courses</h2>
            <div className="display-courses">
                {
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