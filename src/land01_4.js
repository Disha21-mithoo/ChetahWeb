import React, { Component } from 'react';
import "./land01_4.css";
import cardimg1 from "./images/heart1.svg";

import cardimg3 from "./images/card-6 (1).png";
import cardimg5 from "./images/content-shape7.svg";
import copyicon from "./images/copy-regular.svg";
import payicon from "./images/credit-card-regular.svg";

const Land01_4 = () => {
    return(
        <div class="land01_4">
           <div class="row Page01_4Row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card Page01_4Card1">
         <div className=' Page01_4Card1bg'>
         <img src={cardimg1} className='cardbg01-img4'></img>
        <img src={cardimg3} className='cardbg01-img1'></img>
        <img src={cardimg5} className='cardbg01-img3'></img>
        </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div class="card Page01_4Card2">
      <div className='Page01_4Card2Content'>
      {/* <span className='Page01_4text1'><span><img src={texticon} className='iconimg'></img></span>Book Meetings Fast</span> */}
      <div>  <h1 className='Page01_4h1'>Start finding leads that get coverts quickly.</h1> </div>
      <div><p className='Page01_4p'>App gives you the blocks & components you need to create a truly professional website, landing page.</p></div>
      <button class="btn btn-outline-dark navbtn01_4"><b>Get 14 Days Free Trial</b></button>

      <div className='row page01_4Row2'>
        <div className='col-6'>
        <span><img src={copyicon} className='iconimg01'></img></span>
        <h5>Easy to Copy</h5>
         <p>App gives you all the blocks and components you need</p>
        </div>
        <div className='col-6'>
        <span><img src={payicon} className='iconimg01'></img></span>
        <h5>Secure Payments</h5>
         <p>App gives you all the blocks and components you need</p>
        </div>
        <div>
            
        </div>
      </div>

      </div>


      
      </div>
    </div>
  
</div>
       
        </div>
    );
}

export default Land01_4;