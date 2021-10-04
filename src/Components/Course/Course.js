import React from 'react';
import './Course.css';

const Course = (props) => {
    //------------  Destructuring Props      ----------------
    const { id, course, instructor, price, duaration, image } = props.course;
    const { handleViewDetailsClick } = props;

    return (   
        // ---------------    Course Card    ------------------    
        <div className="Course card h-100">
            {/* ------------    Image   --------------- */}
            <img src={image} className="card-img-top thumbnail" alt="" />
            {/* ------------    Course Body   --------------- */}
            <div className="card-body">
                <h5 className="mt-3">{course}</h5>
                <p>Instructor: <span className="fw-bold">{instructor}</span></p>
                <p>Course fee: $<span className="fw-bold">{price}</span></p>
                <p>Duaration: <span className="fw-bold">{duaration}</span></p>
            </div>

            {/* ------------   View Course Details Button   --------------- */}
            <div className="card-footer">
                <button onClick={() => handleViewDetailsClick(id)} className="details-button py-2">View Course Details</button>
            </div>
        </div>
    );
};

export default Course;