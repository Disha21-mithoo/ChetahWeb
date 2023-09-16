import React, { Component } from 'react';
import "./land01_10.css";
import logoimg from "./images/logoimg.svg";
import location from "./images/location.png";
import mail from "./images/mail.jpg";


const Land01_10 = () => {
    return(
        <div className='land01_10'>
            <div className='row Page01_10Row1'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='Page01_10col1'>
                    <span ><img src={logoimg} ></img></span>
                    <h1 className='page01_10h1'>Marketing solution that just makes sense</h1>
                    </div>
                </div>
                <div className='col-2'></div>
                <div className='col-lg-4 col-md-6 col-sm-12 Page01_10col2'>
                    <div className='row'>
                        <div className='col-3'><img src={location} className='locateimg'></img></div>
                        <div className='col-8'><p><b>8502 Preston Rd. Inglewood, Maine 98380, USA</b></p></div>
                    </div>
                    <br></br><br></br>
                    <div className='row'>
                        <div className='col-3'><img src={mail} className='mailimg'></img></div>
                        <div className='col-8'><p><b>support@chetah.co</b></p></div>
                    </div>
                    
                    
                </div>
                <hr></hr>
                <div className='row Page01_10Row2'>
                <div className='col-5'>
                    <div className='row Page01_10Row3'>
                        <div className='col-lg-3 col-sm-6'><b>About</b></div>
                        <div className='col-lg-3 col-sm-6'><b>Features</b></div>
                        <div className='col-lg-3 col-sm-6'><b>Work</b></div>
                        <div className='col-lg-3 col-sm-6'><b>support</b></div>
                    </div>
                </div>
                <div className='col-3'></div>
                <div className='col-4'><b>Copyright © 2023 FinestDevs. All Rights Reserved</b></div>
            </div>
            </div>
            
            
        </div>
    );
}
export default Land01_10;