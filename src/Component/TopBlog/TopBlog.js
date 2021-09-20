import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import img1 from './Top-Blog-Images/blog-1.png';
import img2 from './Top-Blog-Images/blog-2.png';
import img3 from './Top-Blog-Images/blog-3.png';
import img4 from './Top-Blog-Images/blog-4.png';
import './TopBlog.css';


const topBlogs = [
    {
        img:img1,
        title:'13 of My Favorite UI/UX Goodies',
        by:'Danny Sapio'
    },
    {
        img:img2,
        title:'UI cheat sheet: list vs grids',
        by:'Tess Gadd'
    },
    {
        img:img3,
        title:'7 typography tips for interface design',
        by:'Jeremiah Lam'
    },
    {
        img:img4,
        title:'Your logo is copied',
        by:'Ferdinand Vogler'
    }
]

const TopBlog = () => {

    const [blogs,setBlogs]= useState([]);
    useEffect(()=>{
        setBlogs(topBlogs);
    },[]);
    return (
        <div className='top-blog '>
            <h4 className='title'>Top Blog</h4>
            <div className="row row-cols-md-1 row-cols-lg-2">
            {
                blogs.map(blog => <Blog blog={blog}></Blog>)
            }
            </div>
            
        </div>
    );
};

export default TopBlog;