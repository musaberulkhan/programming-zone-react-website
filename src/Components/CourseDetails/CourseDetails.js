import React, { useEffect, useState } from 'react';
import './CourseDetails.css';
import { useParams } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState();

    useEffect(() => {
        fetch('../coursedata.json')
            .then(res => res.json())
            .then(data => {
                data.forEach(course => {
                    if (course.id === courseId) {
                        setCourse(course);
                    }
                });
            })
    }, [courseId]);

    return (
        <div className="CourseDetails container my-5">
            <h1 className="text-center mb-4">{course?.course}</h1>
            <div className="d-flex justify-content-center mb-5">
                <img className="image" src={course?.image} alt="" />
            </div>
            <h6>Instructor: {course?.instructor}</h6>
            <h5>Course Fee: ${course?.price}</h5>
            <h6>Duration: {course?.duaration}</h6>
            <p className="details">{course?.details}</p>
        </div>
    );
};

export default CourseDetails;