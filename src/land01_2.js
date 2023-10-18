import React, { Component } from 'react';
import "./land01_2.css";
import cardimg1 from "./images/content-shape1-1.svg";
import cardimg2 from "./images/content-shape2-1.svg";
import cardimg3 from "./images/card-3.png";
import cardimg4 from "./images/card-4-1.png";
import cardimg5 from "./images/content-shape3-1.png";
import texticon from "./images/envelope-regular.svg";

const Land01_2 = () => {
    return(
        <div class="land01_2">
           <div class="row Page01_2Row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card Page01_2Card1">
         <div className=' Page01_2Card1bg'>
         <img src={cardimg1} className='cardbg-img4'></img>
        <img src={cardimg3} className='cardbg-img1'></img>
        <img src={cardimg2} className='cardbg-img5'></img>
        <img src={cardimg4} className='cardbg-img2'></img>
        <img src={cardimg5} className='cardbg-img3'></img>
        </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div class="card Page01_2Card2">
      <div className='Page01_2Card2Content'>
      <span className='Page01_2text1'><span><img src={texticon} className='iconimg'></img></span> Book Meetings Fast</span>
      <div>  <h1 className='Page01_2h1'>Connect with leads with zero hassle.</h1> </div>
      <div><p className='Page01_2p'>Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p></div>
      </div>


      
      </div>
    </div>
  
</div>
       
        </div>
    );
}

export default Land01_2;