import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses] = useCourses();

    return (
        <div className="Courses container">
            <h2 className="mt-5 section-title">All Courses</h2>
            <div className="display-courses">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>            
        </div>

    );
};

export default Courses;