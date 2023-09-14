import React, { Component } from 'react';
import "./land03_7.css";
import img1 from "./images/Line1.svg";
import img2 from "./images/line5.svg";
import img3 from "./images/shape2.svg";



const Land03_7 = () => {
    return(
        <div class="land03_7">
        <section class="row Page7Row">
  
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card Page7Card1">
      
      <b> <h1 className='Page7h1'>Experience faster payment.</h1> </b>
      <br></br>
      <p className='Page7p'>We consider all the drivers of change gives you the blocks & you need professional website of client.</p>
      <img src={img1} className='Page7img1'></img>
      <img src={img3} className='Page7img3'></img>
      
      </div>
      </div>
    

  <div class="col-sm-6 ">
    <div class="card Page7Card2">
    <button class="btn btn-outline-light P7trialbtn">Get 14 Days Free Trial</button>
        <img src={img2} className='Page7img2'></img>
        
        
        
    </div>
  </div>
</section>
        </div>
    );
}
export default Land03_7;