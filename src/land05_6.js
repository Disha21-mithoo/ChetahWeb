import React, { Component } from 'react';
import "./land05_6.css";
import gg1 from "./images/user-img1.png";
import gg2 from "./images/test2.png";




const Land05_6 = () => {
    return(
        <div class="land05_6">
            <h5>3940+ Happy Chetah Users</h5>
            <h1>Don’t just take our words</h1>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                   <div className='card'>
                    <div className='row'>
                        <div className='col-5'>
                            <div className='card'>
                            <img src={gg1}></img>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className='card'>
                                fddh
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <div className='col-lg-6 col-sm-12'>
                   <div className='card'>
                    <div className='row'>
                        <div className='col-5'>
                            <div className='card'>
                            <img src={gg2}></img>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className='card'>
                                fddh
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
export default Land05_6;