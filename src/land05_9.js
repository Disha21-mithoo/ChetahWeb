import React, { Component } from 'react';
import "./land05_9.css";
import logoimg from "./images/oLogo.svg";



const Land05_9 = () => {
    return(
        <div className='land05_9'>
            <div className='row'>
                <div className='col-5'>
                    <img src={logoimg}></img>
                    <p className='fp'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                    Copyright © 2023 FinestDevs. All Rights Reserved
                </div>
                <div className='col-7'>
                    <div className='row'>
                        <div className='col-4'>
                           <a href='#'> <p className='fhp'>Pages</p>            </a>
                           <a href='#'> <p className='fhs'>Features</p>         </a>
                           <a href='#'> <p className='fhs'>Pricing</p>          </a>
                           <a href='#'> <p className='fhs'>Afiliate Program</p> </a> 
                           <a href='#'> <p className='fhs'>Press Kit</p>        </a>
                        </div>
                        <div className='col-4'>
                             <a href='#'><p className='fhp'>Reference Page</p></a>
                             <a href='#'><p className='fhs'>Features</p></a>
                             <a href='#'><p className='fhs'>Pricing</p></a>
                             <a href='#'><p className='fhs'>Afiliate Program</p></a>
                             <a href='#'><p className='fhs'>Press Kit</p></a>
                        </div>
                        <div className='col-4'>
                           <a href='#'> <p className='fhp'>Utilities</p></a>
                           <a href='#'> <p className='fhs'>Features</p></a>
                           <a href='#'> <p className='fhs'>Pricing</p></a>
                           <a href='#'> <p className='fhs'>Afiliate Program</p></a>
                           <a href='#'> <p className='fhs'>Press Kit</p></a>
                        </div>
                        
                    </div>
                   <a href='#'><i class="fa fa-facebook-square fb"></i></a> 
                   <a href='#'> <i class="fa fa-instagram fb"></i></a>
                   <a href='#'> <i class="fa fa-twitter-square fb"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Land05_9;