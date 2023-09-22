import React, { Component } from 'react';
import "./land05_7.css";
import mm1 from "./images/blog-04.png";
import mm2 from "./images/blog-05.png";
import mm3 from "./images/blog-06.png";




const Land05_7 = () => {
    return(
        <div class="land05_7">
            <h5>Latest about Finance</h5>
            <h1>Read from our blog</h1>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                  <a href="#"> <div className='card'>
                        <img src={mm1}></img>
                        <h4>The importance of having an emergency savings fund</h4>
                        <h6>Management</h6>
                    </div></a>
                </div>
                <div className='col-lg-4 col-sm-12'>
                  <a href="#"> <div className='card'>
                        <img src={mm2}></img>
                        <h4>Why you should consider investing in the stock market</h4>
                        <h6>Finance</h6>
                    </div></a>
                </div>
                <div className='col-lg-4 col-sm-12'>
                  <a href="#"> <div className='card'>
                        <img src={mm3}></img>
                        <h4>10 tips for managing your money in the new year</h4>
                        <h6>Finance</h6>
                    </div></a>
                </div>
            </div>
        </div>
    );
}
export default Land05_7;