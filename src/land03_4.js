import React, { Component } from 'react';
import "./land03_4.css";
import cardimg2 from "./images/Card-1.png";
import checkmark from "./images/check-mark.png";




const Land03_4 = () => {
    return(
        <div className='land03_4'>
            <div class="row Page4Row">
  
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card Page4Card1">
      
      <div>  <h1 className='Page4h1'>Real-time Sending</h1> </div>
      <div><p className='Page4p'>Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p></div>
      <div className='Page4Card1inner'>
      <h5 className='Page4Card1h5'><span><img src={checkmark} alt='' className='checkmrkimg'></img> 256-bit SSL encryption</span></h5>
      <p className='Page4Card1p2'>On the other hand denounce with righteous info and dislike beguled</p>
      <br></br>
      <h5 className='Page4Card1h5'><span><img src={checkmark} alt='' className='checkmrkimg'></img> PCI-DSS compliant</span></h5>
      <p className='Page4Card1p2'>But I must explain to you how all mistaken denouncing pleasure and praising.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 ">
    <div class="card Page4Card2">
      <div className='Page4Card2bg'>
        <img src={cardimg2} alt='' className='cardbg-2img'></img>
        
        </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Land03_4;