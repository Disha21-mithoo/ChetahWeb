import React, { Component } from 'react';
import "./land04_4.css";
import cc from "./images/circle.svg";
import cc1 from "./images/iconc.svg";




const Land04_4 = () => {
    return(
        <div className='land04_4'>
            <div className='row '>
                <div className='col-lg-6 col-sm-12'>
                    <div className='card card1'>
                        <h1>Build a personable brand fast.</h1>
                        <h6>Use and re-use tons of responsive sections too a main create the perfect layout.</h6>
                       <a href='#'> <h5>Learn About Branding </h5></a>
                       <img src={cc}></img>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='card card2'>
                        <h1>Create your own layout with Cheetah.</h1>
                        <h6>Use and re-use tons of responsive sections too a main create the perfect layout.</h6>
                       <a href='#'> <h5>Explore All Layouts  </h5></a>
                       <img src={cc1}></img>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Land04_4;
