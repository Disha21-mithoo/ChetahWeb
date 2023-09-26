import React, { Component } from 'react';
import "./land06_3.css";
import c1 from "./images/Detail-Cards.png";
import c2 from "./images/Chat-l5.png";



const Land06_3 = () => {
    return(
        <div className='land06_3'>
        <h5>Say hello to New Feature</h5>
            <h1>We can help you achieve your customer satisfaction goals.</h1>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <div className='card pg06_3card1'>
                        <h2>Secured Technology</h2>
                        <p>Create an on-brand home for your product and create countle hours on design time. Use this table to compare your product.</p>
                       <a href='#'><h6>Get 14 days free trial</h6></a>
                       <div className='dd1'> <img src={c1}></img></div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='card pg06_3card2'>
                        <h2>Human Support</h2>
                        <p>Create an on-brand home for your product and create countle hours on design time. Use this table to compare your product.</p>
                       <a href='#'><h6>Get 14 days free trial</h6></a>
                       <div className='dd2'> <img src={c2}></img></div>
                      
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Land06_3;