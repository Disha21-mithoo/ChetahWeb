import React from 'react';
import "./land01_6.css";
import img1 from "./images/shap.svg";
import img2 from "./images/content-shape8.svg";
import img3 from "./images/content-shape9.svg";
import img4 from "./images/cta-img1.png";
import img5 from "./images/cta-img2.png";



const Land01_6 = () => {
    
    return(
        <div className='land01_6'>
            <div class="row page01_6Row">
  <div class="col-lg-6 col-sm-12">
  <div class="card page01_6card1">
   <div className='row'>
    <div className='col-2'><img className="imgp01_62" src={img2}></img></div>
    <div className='col-8'><img className="imgp01_61" src={img1}></img></div>
    <div className='col-2'><img className="imgp01_63" src={img3}></img></div>
    </div>
    
    
    <img className="imgp01_64" src={img4}></img>
    <img className="imgp01_65" src={img5}></img>
    </div>
  </div>
  <div class="col-lg-6 col-sm-12">
    <div class="card page01_6card2">
      
        <h5 class="page01_6h1">Connect easy & fast with Chetah.</h5>
        
        <p class="page01_6p1">Amet minim mollit non deserunt ullamco est sit aliqua sint. velit officia consequat duis enim velit mollit.</p>
        
        <button class="btn btn-outline-dark navbtn01_6"><b>Get 14 Days Free Trial</b></button>
    </div>
  </div>
  
</div>
        </div>
    );
}

export default Land01_6;