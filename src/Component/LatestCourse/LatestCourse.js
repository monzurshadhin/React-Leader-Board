import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import img1 from './Latest-Course-Image/course-1.png';
import img2 from './Latest-Course-Image/course-2.png';
import img3 from './Latest-Course-Image/course-3.png';
import './LatestCourse.css';

const LatestCourses = [
    {
        img:img1,
        title:'React-The Complete Guide 2020',
        by: 'Reed Krakoff',
        star:'4.5',
        time:'1:30 hr'

    },
    {
        img:img2,
        title:'Powerpoint 2020 Master Powerpoint Course',
        by: 'Walter Scott',
        star:'4.3',
        time:'1:20 hr'

    },
    {
        img:img3,
        title:'The Complete JavaScript Course 2020',
        by: 'Reed Krakoff',
        star:'4.5',
        time:'1:30 hr'

    }
]

const LatestCourse = () => {
    const [Courses,setCourses] = useState([]);
    useEffect(()=>{
        setCourses(LatestCourses);
    },[])
    return (
        <div className='latest-courses container'>
            <h4 className='title'>Latest Courses</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {
                Courses.map(course=> <Course course={course}></Course>)
            }
            </div>
            
        </div>
    );
};

export default LatestCourse;