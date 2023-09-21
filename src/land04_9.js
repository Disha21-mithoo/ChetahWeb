import React, { Component } from 'react';
import "./land04_9.css";
import lg1 from "./images/brand-logo1.svg";
import lg2 from "./images/brand-logo2.svg";
import lg3 from "./images/brand-logo3.svg";
import lg4 from "./images/brand-logo4.svg";



const Land04_9 = () => {
    return(
        <div className='land04_9'>
            <h5>We are on media</h5>
            <h1>The ultimate theme to help you build startup website</h1>
            <h4>Loved by 100's of brands in the direct to consumer space</h4>
            <div className='row page04_9Row1'>
                <div className='col-1'></div>
                <div className='col'><img src={lg1}></img></div>
                <div className='col'><img src={lg2}></img></div>
                <div className='col'><img src={lg3}></img></div>
                <div className='col'><img src={lg4}></img></div>
                <div className='col-1'></div>

            </div>
            <div className='hhh'>
            <a href="#" className="Fpage049btn"><span className='Fpage049btname'>Get 14 Days Free Trial</span></a>
        </div></div>
    );
}
export default Land04_9;