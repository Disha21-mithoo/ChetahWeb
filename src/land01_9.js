import React, { Component } from 'react';
import "./land01_9.css";
import shpe from "./images/shape1.svg";
import arrow from "./images/arrow.svg";
import man1 from "./images/man3.png";
import man2 from "./images/man4.png";
import man3 from './images/man.png';
import man4 from "./images/man1.png";


const Land01_9 = () => {
    return(
        <div className='land01_9'>
           <div className='row page01_9Row'>
           <div className='col-1'></div>
            <div className='col-2'>
            <div> <img src={man1} className='man1'></img></div>
           
           <div><img src={man2} className='man2'></img></div>
            </div>
            <div className='col-6'>
                <div className='card page01_9card'>
                <img src={shpe} className='topimg'></img>
                    <h1 className='page01_9h1'>Try it for Free</h1>
                    <p className='page01_9p'>App gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
                    <button class="btn btn-outline-dark navbtn01_9"><b>Get 14 Days Free Trial</b></button>
                    <p className='page01_9p2'>No Credit Card Required</p>
                    <img src={arrow} className='arrow'></img>
                </div>
            </div>
            <div className='col-2'>
            <div> <img src={man3} className='man3'></img></div>
           
            <div><img src={man4} className='man4'></img></div>
            </div>
            <div className='col-1'></div>
           </div>
        </div>
    );
}
export default Land01_9;