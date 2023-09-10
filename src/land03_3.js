import React, { Component } from 'react';
import "./land03_3.css";
import cardimg from "./images/Cardimg.png";
import checkmark from "./images/check-mark.png";


const Land03_3 = () => {
    return(
        <div class="land03_3">
            <div class="row Page3Row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card Page3Card1">
      <div className='Page3Card1bg'>
        <img src={cardimg} className='cardbg-1img'></img>
        
        </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card Page3Card2">
      
      <div>  <h1 className='Page3h1'>Secure Transactions</h1> </div>
      <div><p className='Page3p'>Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p></div>
      <div className='Page3Card2inner'>
      <h5 className='Page3Card2h5'><span><img src={checkmark} className='checkmrkimg'></img> 256-bit SSL encryption</span></h5>
      <p className='Page3Card2p2'>On the other hand denounce with righteous info and dislike beguled</p>
      <br></br>
      <h5 className='Page3Card2h5'><span><img src={checkmark} className='checkmrkimg'></img> PCI-DSS compliant</span></h5>
      <p className='Page3Card2p2'>But I must explain to you how all mistaken denouncing pleasure and praising.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Land03_3;