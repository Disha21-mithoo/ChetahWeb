import React, { Component } from 'react';
import "./land05_4.css";
import mmg from './images/card10.svg';
import arr from "./images/Arrow-6.svg";




const Land05_4 = () => {
    return(
        <div class="land05_4">
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                <div className='colbg'>
                    <img src={mmg}></img>
                </div>
                </div>
                <div className='col-lg-6 col-sm-12 ff'>
                    <h5>Get expert solution</h5>
                    <h1>Increased financial accountability.</h1>
                    <p>We consider all the drivers of change gives you the blocks & components you need to change to create a truly professional website.</p>
                    <a href="#" className="page053btn"><span className='page053btname'>Get 14 Days Free Trial</span></a>
                </div>
            </div>
        </div>
    );
}

export default Land05_4;