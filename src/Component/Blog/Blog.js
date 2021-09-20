import React from 'react';

const Blog = (props) => {
    console.log(props)
    const {img,title,by}=props.blog;
    
    return (
        <div className="d-md-flex align-items-center blog">
            <div>
                <img  className="img-fluid blog-img" src={img} alt="" />
            </div>
            <div className="blog-title mt-3 mt-md-0 ms-0 ms-md-4">
                <h4 >{title}</h4>
                <small>by <span>{by}</span></small>
            </div>

        </div>
    );
};

export default Blog;