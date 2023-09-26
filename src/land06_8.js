import React, { Component } from 'react';
import "./land06_8.css";
import r1 from "./images/r1.png";
import r2 from "./images/r2.png";
import r3 from "./images/r3.png";
import r4 from "./images/r4.png";
import r5 from "./images/r5.png";


const Land06_8 = () => {
    return(
        <div className='land06_8'>
            <div className='row'>
                <div className='col-lg-3 col-sm-0'>
                    
                    <img className='r1' src={r1}></img>
                    <img className='r2' src={r2}></img>
                    <img className='r3' src={r3}></img>
                </div>
                <div className='col-lg-6 col-sm-8'>
                    <h1>Stop wasting time, start scaling your business with Chetah.</h1>
                    <h5>Grow faster with a website that helps you convert more customers.</h5>
                    <div className='btnn8'> <a href="#" className="Fpage08btn"><span className='Fpage08btname'>Get 14 Days Free Trial</span></a></div>
                </div>
                <div className='col-lg-3 col-sm-0'>
                    <img className='r4' src={r4}></img>
                    <img className='r5' src={r5}></img>
                </div>
            </div>
        </div>
    );
}
export default Land06_8;













