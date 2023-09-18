import React, { Component } from 'react';
import "./land03_10.css";
import imgt from "./images/shape.svg";
import checkmark from "./images/check-mark.png";




const Land03_10 = () => {
    return(
        <div class="land03_10">
            <div className='row page03_10Row'>
                <div className='col-sm-6 mb-3 mb-sm-0 '>
                    <h1 className='page03_10h1'>Start accepting payments at lightning speed.</h1>
                    <p className='page03_10p1'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit for official consequat enim to main purpose. If you haven’t tried out Chetah for them help.</p>
                    <button class="btn btn-outline-light P10trialbtn">Get 14 Days Free Trial</button><button class="btn btn-outline-light sdbtn">Learn More</button>
                </div>
                <div className='col-6 page03_10col2'>
                <img src={imgt} className='imgt'></img>
                <div className='Page3Card2inner'>
      <h5 className='Page03_10Card2h5'><span><img src={checkmark} className='checkmrkimg'></img>Documentation</span></h5>
      <p className='Page03_10Card2p2'>Lorem ipsum dolor sit amet, consectetur elit.</p>
      <br></br>
      <h5 className='Page03_10Card2h5'><span><img src={checkmark} className='checkmrkimg'></img> Documentation</span></h5>
      <p className='Page03_10Card2p2'>Lorem ipsum dolor sit amet, consectetur elit.</p>
      </div>
                </div>
            </div>
        </div>
    );
}
export default Land03_10;