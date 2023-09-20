import React, { Component } from 'react';
import "./land02_4.css";
import gg from "./images/content-img1.png";
import gg1 from "./images/card-6-1.png";



const Land02_4 = () => {
    return(
        <div className='land02_4'>
        <div className='row page02_4Row1'>
        <div class="col-sm-6 mb-3 mb-sm-0 page02_4col1">
            <h5 className='page02_4h5'>The best UI Kit in town</h5>
            <h1>Build a website without building it yourself!</h1>
            <p>App gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
            <div className='row page02_4Row2'>
                <div className='col-6'><h4>Get unlimited design inspirations. Level up your design.</h4></div>
                <div className='col-6'><h4>14+ Premium tailwind UI kits. Start with unlimited product downloads.</h4></div>
                
                
            </div><hr></hr>
            <a href='#'><h5>Get Started!</h5></a>
        </div>
        <div className='col-6 page02_4col2'>
            <img className="col2_img1" src={gg}></img>
             <img className='coimg2 vert-move1' src={gg1}></img> 
        </div>
        </div>
        </div>
    );
}
export default Land02_4;