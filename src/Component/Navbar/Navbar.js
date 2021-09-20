import React from "react";
import navLogo from './Navbar-images/logo.png';
import userImg from './Navbar-images/profile.png';
import './Navbar.css';



const Navbar = () => {
  return (
    <div className="top-nav">
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <span className="logo"><img width='40px' height='50px'  src={navLogo} alt="" />Idea</span>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://getbootstrap.com/docs/5.1/components/navbar/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://getbootstrap.com/docs/5.1/components/navbar/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://getbootstrap.com/docs/5.1/components/navbar/">Works</a>
        </li>
        
        

        <li class="nav-item">
          <img src={userImg} alt="" />
        </li>
      </ul>
      

    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
