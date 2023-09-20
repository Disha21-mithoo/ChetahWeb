import React, { Component } from 'react';
import "./land02_7.css";
import hh from "./images/user-img1.png";
import hh1 from "./images/logoipsum-logo.svg";
import hh3 from "./images/user-img2.png";
import hh4 from "./images/logoipsum.png";



const Land02_7 = () => {
    return(
        <div className='land02_7'>
            <h5>3940+ Happy Users</h5>
            <h1>Don’t just take our words</h1>
            <div className='row page02_7Row1'>
                <div className='col-lg-8 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-8'>
                            <img src={hh} className='userimg'></img>
                        </div>
                        <div className='col-lg-8 col-sm-12'>
                            <h6>"We love this app! Our designers were using it for their projects, so we already knew what kind of design they want."</h6>
                        <div className='row row22'>
                            <div className='col-lg-3'>
                                <b>Jenny Wilson</b>
                                <p>Co-Founder</p>
                            </div>
                            <div className='col-lg-4'>
                                <img src={hh1}></img>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className='col-lg-4 col-sm-8 dd'>
                    <div className="card">
                        <p className='tm1'>3.57 X</p>
                        <p className='tm2'>Yearly Revenue</p>
                        <p className='tm3'>Another way to grow fast</p>
                    </div>
                    <div className='card '>
                    <p className='tm1'>89 %</p>
                        <p className='tm2'>Monthly Conversions</p>
                        <p className='tm3'>On your website</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='row page02_7Row1 gg'>
                <div className='col-lg-8 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-8'>
                            <img src={hh3} className='userimg'></img>
                        </div>
                        <div className='col-lg-8 col-sm-12'>
                            <h6>"We love this app! Our designers were using it for their projects, so we already knew what kind of design they want."</h6>
                        <div className='row row22'>
                            <div className='col-lg-3'>
                                <b>Harvey Gill</b>
                                <p>Founder</p>
                            </div>
                            <div className='col-lg-4'>
                                <img src={hh4}></img>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className='col-lg-4 col-sm-8 dd'>
                    <div className="card">
                        <p className='tm1'>4.16 X</p>
                        <p className='tm2'>Yearly Revenue</p>
                        <p className='tm3'>Another way to grow fast</p>
                    </div>
                    <div className='card '>
                    <p className='tm1'>192 %</p>
                        <p className='tm2'>Monthly Conversions</p>
                        <p className='tm3'>On your website</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Land02_7;