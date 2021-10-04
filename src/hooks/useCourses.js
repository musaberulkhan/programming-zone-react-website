import { useEffect, useState } from "react"

const useCourses = () => {
    // -------- Declare States   -------
    const [courses, setCourses] = useState([]);

    // -------- Fetch Courses Data   -------
    useEffect(() => {
        fetch('coursedata.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);

    // -------- Return Courses   -------
    return [courses];
}

export default useCourses;