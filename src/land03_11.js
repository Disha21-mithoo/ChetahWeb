import React, { Component } from 'react';
import "./land03_11.css";
import logoimg from "./images/oLogo.svg";
import jaguarimg from "./images/jaguar-1.svg";




const Land03_11 = () => {
    return(
        <div className='land03_11'>
        <img src={logoimg}></img>
        <img src={jaguarimg} className='jaguarimg'></img>
        <div className='row land03_11Row'>
            <div className='col-lg-3 col-6'>
                <p className='colheading'>Pages</p>
                <a href='#' className='ttp'><h6 className='links'>Story</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Creative Team</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Founders</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Our Mission</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Career Post</h6></a>
            </div>
            <div className='col-lg-3 col-6'>
                <p className='colheading'>Company</p>
                <a href='#' className='ttp'><h6 className='links'>Features</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Pricing</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Affiliate Program</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Press Kit</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Pricing 2</h6></a>
            </div>
            <div className='col-lg-3 col-6'>
                <p className='colheading'>Product</p>
                <a href='#' className='ttp'><h6 className='links'>Plans</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Integration</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Sign Up</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Careers</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Blog Post</h6></a>
            </div>
            <div className='col-lg-3 col-6'>
                <p className='colheading'>Support</p>
                <a href='#' className='ttp'><h6 className='links'>Account</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Help</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Contact Us</h6></a>
                <a href='#' className='ttp'><h6 className='links'>Customer Support</h6></a>
                <a href='#' className='ttp'><h6 className='links'>404</h6></a>
            </div>

        </div>
        <hr></hr>
        <span className='footerline'>Copyright © 2023 FinestDevs. All Rights Reserved</span>
        </div>
    );
}
export default Land03_11;