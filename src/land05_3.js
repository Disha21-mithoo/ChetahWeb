import React, { Component } from 'react';
import "./land05_3.css";
import cardimg1 from "./images/cards.png";
import texticon from "./images/envelope-regular.svg";
import chkmrk from "./images/check-mark.png";
const Land05_3 = () => {
    return(
        <div class="land05_3">
           <div class="row Page05_3Row">
  
           <div class="col-lg-6 col-md-6 col-sm-12">
  <div class="card Page05_3Card1">
      
      <span className='Page05_3text1'><span><img src={texticon} className='iconimg015'></img></span>Easy Payments</span>
      <div>  <h4 className='Page05_3h1'>Remote work made easy with better tools.</h4> </div>
      
      <div className='row page05_3Row2'>
      
        
        <div className='col-6 xx'>
            <div className='row'>
                <div className='col-2'><img src={chkmrk} className='tickmrk01_6'></img></div>
                <div className='col-10'>Get unlimited project scope. Level up your design.</div>
            </div>
        </div>
    
        <div className='col-6 xx'>
        <div className='row'>
                <div className='col-2'><img src={chkmrk} className='tickmrk01_6'></img></div>
                <div className='col-10'>Get unlimited project scope. Level up your design.</div>
            </div>
        </div>

        
      </div>
      

      
</div>
    </div>

  <div class=" col-lg-6 col-md-6 col-sm-12">
    <div class="card Page05_3Card2">
         <div className='Page05_3Card2bg'>
         
         <img src={cardimg1} className='cardbg01-img51'></img>
         
        </div>
    </div>
  </div>
  
  
</div>
       
        </div>
    );
}

export default Land05_3;