import React, { Component } from 'react';
import "./land03_6.css";
import testman from "./images/landing-03-testimonial.png";
import img1 from "./images/highlight.svg";
import img2 from "./images/line.svg";



const Land03_6 = () => {
    return(
        <div class="land03_6">
<section class="row Page6Row">
  
  <div class="col-sm-7 mb-3 mb-sm-0">
    <div class="card Page6Card1">
      
      <div className='Page6testimontext'> <b> <h2 className='Page6h1'>"Chetah has completely revolutionized our checkout process. Transactions are now faster and more secure than ever before. We highly recommend it to improve any business’s online payment system."</h2> </b>
      <br></br><b><h5>Reymond Denzel</h5></b>
      <p>Sales & Marketing, Alien Ltd.</p>
      </div>
      
      
      </div>
      </div>
    

  <div class="col-sm-5 ">
    <div class="card Page6Card2">
        <img src={img1} className='Page6img1'></img><img src={img2} className='Page6img2'></img>
        <img src={testman} alt='' className='Page6testimg'></img>
        
        
    </div>
  </div>
</section>
       
        </div>
    );
}
export default Land03_6;