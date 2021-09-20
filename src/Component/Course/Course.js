import React from 'react';

const Course = (props) => {
    console.log(props.course)
    const {img,title,by,star,time} =props.course;
    return (
        <div>
           <img className='img-fluid my-3' src={img} alt="" /> 
           <h3 className='course-title'>{title}</h3>
           <small className='course-by'>{by}</small>
           <div className="d-flex justify-content-between mt-2">
               <div>
               <i class="fa fa-star filled"></i>
                  <i class="fa fa-star filled"></i>
                  <i class="fa fa-star filled"></i>
                  <i class="fa fa-star filled"></i>
                  <i class="fa fa-star empty"></i>
                   <span className="ms-2 rate">{star}</span>
               </div>
               <div className="time">
               <i class="far fa-clock"></i>
                   <span className="ms-2 ">{time}</span>
               </div>
           </div>
        </div>
    );
};

export default Course;