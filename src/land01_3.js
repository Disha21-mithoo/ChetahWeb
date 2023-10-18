import React, { Component } from 'react';
import "./land01_3.css";
import cardimg1 from "./images/Card-9.png";
import cardimg2 from "./images/content-shape5.svg";
import texticon from "./images/envelope-regular.svg";
const Land01_3 = () => {
    return(
        <div class="land01_3">
           <div class="row Page01_2Row">
  
           <div class="col-sm-6 mb-3 mb-sm-0">
  <div class="card Page01_3Card1">
      <div className='Page01_3Card1Content'>
      <span className='Page01_3text1'><span><img src={texticon} className='iconimg01'></img></span>Easy Payments</span>
      <div>  <h1 className='Page01_3h1'>Take quick payments direct from meetings.</h1> </div>
      <div><p className='Page01_3p'>Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p></div>
      </div>


      
      </div>
    </div>

  <div class="col-sm-6 ">
    <div class="card Page01_3Card2">
         <div className=' Page01_3Card2bg'>
         <img src={cardimg1} className='cardbg013-img1'></img>
         <img src={cardimg2} className='shape1'></img>
        </div>
    </div>
  </div>
  
  
</div>
       
        </div>
    );
}

export default Land01_3;