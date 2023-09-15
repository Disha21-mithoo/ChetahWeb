import React, { Component } from 'react';
import "./land01_5.css";
import logo1 from "./images/brand-logo6.svg";
import testi1 from "./images/testimonial-img1.png";
import logo2 from "./images/riglogo.svg";
import testi2 from "./images/testimonial-img2.png";
import logo3 from "./images/brand-logo3(1).svg";
import testi3 from "./images/testimonial-img3.png";

const Land01_5 = () => {
    return(
        <div class="land01_5">
          <div className='row Page01_5Row1'>
            <div className='col-12'>
                <h1 className='Page01_5h1'>Don’t just take our words. Over 1400+ people trust us.</h1>
            </div>
        </div>
        <div className='row Page01_5Row2'>
            <div className='col-sm-4 '>
            <div className='card Page01_5card'>
                <p className='card5_p'>"We love this app! Our users were using it for their projects, so clients already knew what this app was and how to use it."</p>
                <span><b>Bessie Cooper</b></span>
                <span>Co-Founder, CEO</span>
                <hr></hr>
                <div className='row'>
                    <div className='col-6'>
                    <img src={logo1}></img>
                    </div>
                    <div className='col-3'>
                    </div>
                    <div className='col-3'>
                    <img src={testi1}></img>
                    </div>
                </div>
                
            </div>
            </div>
            <div className='col-sm-4 '>
            <div className='card Page01_5card'>
            <p className='card5_p'>"I didn’t know designing in Figma could be this individualized. I’d never considered it before, but this app changed my mind."</p>
                <span><b>Albert Flores</b></span>
                <span>Senior Product Manager</span>
                <hr></hr>
                <div className='row'>
                    <div className='col-6'>
                    <img src={logo2}></img>
                    </div>
                    <div className='col-3'>
                    </div>
                    <div className='col-3'>
                    <img src={testi2}></img>
                    </div>
                </div>
            </div>
            </div>
            <div className='col-sm-4'>
            <div className='card Page01_5card'>
            <p className='card5_p'>"We love this app! Our users were using it for their projects, so clients already knew what this app was and how to use it."</p>
                <span><b>Jenny Wilson</b></span>
                <span>Head of Marketing</span>
                <hr></hr>
                <div className='row'>
                    <div className='col-6'>
                    <img src={logo3}></img>
                    </div>
                    <div className='col-3'>
                    </div>
                    <div className='col-3'>
                    <img src={testi3}></img>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
    );
}
export default Land01_5;