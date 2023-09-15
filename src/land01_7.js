import React, { Component } from 'react';
import "./land01_7.css";
import cardimg1 from "./images/Card-53-1.png";
import cardimg2 from "./images/Card-10.svg";
import texticon from "./images/envelope-regular.svg";
import chkmrk from "./images/check-mark.png";
const Land01_7 = () => {
    return(
        <div class="land01_7">
           <div class="row Page01_7Row">
  
           <div class="col-lg-6 col-md-6 col-sm-12">
  <div class="card Page01_7Card1">
      
      <span className='Page01_7text1'><span><img src={texticon} className='iconimg01'></img></span>Easy Payments</span>
      <div>  <h4 className='Page01_7h1'>Remote work made easy with better tools.</h4> </div>
      
      <div className='row page01_7Row2'>
      
        
        <div className='col-6'>
            <div className='row'>
                <div className='col-2'><img src={chkmrk} className='tickmrk01_6'></img></div>
                <div className='col-10'>Get unlimited project scope. Level up your design.</div>
            </div>
        </div>
    
        <div className='col-6'>
        <div className='row'>
                <div className='col-2'><img src={chkmrk} className='tickmrk01_6'></img></div>
                <div className='col-10'>Get unlimited project scope. Level up your design.</div>
            </div>
        </div>

        
      </div>
      

      
</div>
    </div>

  <div class=" col-lg-6 col-md-6 col-sm-12">
    <div class="card Page01_7Card2">
         <div className='Page01_7Card2bg'>
         <img src={cardimg2} className='cardbg01-img72'></img>
         <img src={cardimg1} className='cardbg01-img71'></img>
         
        </div>
    </div>
  </div>
  
  
</div>
       
        </div>
    );
}

export default Land01_7;