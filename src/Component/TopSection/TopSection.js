import React from 'react';
import TopBlog from '../TopBlog/TopBlog';
import TopPlayer from '../TopPlayer/TopPlayer';
import './TopSection.css';

const TopSection = () => {
    return (
        <div className="container top-section">
            <TopPlayer></TopPlayer>
            <TopBlog></TopBlog>
        </div>
    );
};

export default TopSection;