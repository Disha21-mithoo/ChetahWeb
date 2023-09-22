import React, { Component } from 'react';
import "./land05_8.css";
import ccr from "./images/Circles.svg";
import arr from "./images/arrow1.svg";




const Land05_8 = () => {
    return(
        <div class="land05_8">
            <div className='contbg1'>
                <img src={ccr}></img>
                <div className='mm'>
                <h1>Get early access to Chetah.</h1>
                 <h2>Close your books faster and grow.</h2>
                 </div>
                 <div className='btnn'>
                 <a href="#" className="Fpage05btn"><span className='Fpage05btname'>Get 14 Days Free Trial</span></a>
                 <img src={arr}></img>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-sm-4 mmt'>
                    <span><h6><i class="fa fa-check-circle-o"></i> Fraud protection, zero liability.</h6></span>
                </div>
                <div className='col-lg-3 col-sm-4 mmt'>
                    <span><h6><i class="fa fa-check-circle-o"></i> Fraud protection, zero liability.</h6></span>
                </div>
                <div className='col-lg-3 col-sm-4 mmt'>
                    <span><h6><i class="fa fa-check-circle-o"></i> Fraud protection, zero liability.</h6></span>
                </div>
                <div className='col-3'></div>
            </div>
            </div>
        </div>
    );
}
export default Land05_8;