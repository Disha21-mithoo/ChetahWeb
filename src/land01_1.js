import React, { Component } from 'react';
import Land1 from "./images/land01.png";
import Land2 from "./images/land02.png";
import Land3 from "./images/land03.png";
import Land4 from "./images/land04.png";
import Land5 from "./images/land05.png";
import Land6 from "./images/land06.png";
import "./land01_1.css";
import logoimg from "./images/oLogo.svg";
import cardimg2 from "./images/abs-img3.png";
import cardimg3 from "./images/Card-1-2.png";
import cardimg4 from "./images/Card-2.png";
import brand1 from "./images/brand-logo1.svg";
import brand2 from "./images/brand-logo2.svg";
import brand3 from "./images/brand-logo3.svg";
import brand4 from "./images/brand-logo4.svg";
import brand5 from "./images/brand-logo5.svg";




const Land01_1 = () => {
    return(
        <div class="land01_1">
         <nav class="navbar navbar-expand-lg navbar01">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><span><img src={logoimg}></img></span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navMainul">
              <li class="nav-item dropdown navMainli">
                <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Demos
                </a>
                <ul class="dropdown-menu mmf">
                  <li className='row'>
                  <a class="dropdown-item col-lg" href="#">
                    <div className='row mmd'>
                      <div className='col-lg-6'><img src={Land1} className='fgh'></img></div>
                      <div className='col-lg-6'>
                      <h6 className='fgh2'>Landing 01</h6>
                      <p className='fgh2p'>Colorful website for any</p>
                      <p className='fgh2p'>startup</p>
                      </div>
                    </div>
                    
                  </a>
                  <a class="dropdown-item col-lg " href="#">
                    <div className='row mmd'>
                      <div className='col-lg-6'><img src={Land2} className='fgh'></img></div>
                      <div className='col-lg-6'>
                      <h6 className='fgh2'>Landing 02</h6>
                      <p className='fgh2p'>Trendy SaaS website</p>
                      <p className='fgh2p'>targeted on product</p>
                      </div>
                    </div>
                    
                  </a>
                  <a class="dropdown-item col-lg" href="#">
                    <div className='row mmd'>
                      <div className='col-lg-6'><img src={Land3} className='fgh'></img></div>
                      <div className='col-lg-6'>
                      <h6 className='fgh2'>Landing 03</h6>
                      <p className='fgh2p'>Modern & clean fintech</p>
                      <p className='fgh2p'>SaaS website</p>
                      </div>
                    </div>
                    
                  </a>
                  
                  </li>
                  <li className='row'>
                  <a class="dropdown-item col-lg " href="#">
                    <div className='row mmd' >
                      <div className='col-lg-6'><img src={Land4} className='fgh'></img></div>
                      <div className='col-lg-6'>
                      <h6 className='fgh2'>Landing 04</h6>
                      <p className='fgh2p'>Bright & clean web</p>
                      <p className='fgh2p'>app website</p>
                      </div>
                    </div>
                    
                  </a>
                  <a class="dropdown-item col-lg " href="#">
                  <div className='row mmd'>
                      <div className='col-lg-6'><img src={Land5} className='fgh'></img></div>
                      <div className='col-lg-6'>
                      <h6 className='fgh2'>Landing 05</h6>
                      <p className='fgh2p'>Colorful & trendy mobile</p>
                      <p className='fgh2p'>app website</p>
                      </div>
                    </div>
                  </a>
                  <a class="dropdown-item col-lg " href="#">
                  <div className='row mmd'>
                      <div className='col-lg-6'><img src={Land6} className='fgh'></img></div>
                      <div className='col-lg-6'>
                      <h6 className='fgh2'>Landing 06</h6>
                      <p className='fgh2p'>Illustrated trendy website</p>
                      <p className='fgh2p'>for startups</p>
                      </div>
                    </div>
                  </a>
                  </li>
                  
                </ul>
              </li>
              <li class="nav-item dropdown navMainli">
                <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Essential Pages
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item " href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown navMainli">
                <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item " href="#">Blog Single</a></li>
                  <li><a class="dropdown-item" href="#">Blog Details</a></li>
                  
                  
                </ul>
              </li>
              <li class="nav-item dropdown navMainli">
                <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Help
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item " href="#">Video Tutorials</a></li>
                  <li><a class="dropdown-item" href="#">Read Documentation</a></li>
                  
                  <li><a class="dropdown-item" href="#">Help Support</a></li>
                </ul>
              </li>
              
            </ul>
              <button class="btn btn-outline-dark navbtn01"><b>Start Free Trial</b></button>
          </div>
        </div>
      </nav>
      <div class="row Page1_01Row">
  
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card Page1_01Card1">
      
      <div>  <h1 className='Page1_01h1'>Generate More Leads Than Ever, with Chetah.</h1> </div>
      <div><p className='Page1_01p'>Say Goodbye to Cold Calls and Hello to High-Quality Leads with Our User-Friendly Platform.</p></div>
      
      <div className='row Page1_01Row2'>
      
         <div className='col-6 tt01'>
          <input placeholder='Enter your Email-id' className='Input01'></input>
         </div>
         <div className='col-5'>
         <a href="#" className="Fpage01btn"><span className='Fpage01btname'>Get 14 Days Free Trial</span></a>
         </div>
         <div className='col-1'>
          
         </div>
      </div>
      <h5 className='Page1_01h5'>Trusted by 6,287 users</h5>
      <span className='rating01'>
      <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span className='ratingtext'>4.1/5 (14k Reviews)</span>
</span>
    </div>
  </div>
  <div class="col-sm-6 ">
    <div class="card Page1_01Card2">
      <div className='Page1_01Card2bg'>
      <img src={cardimg3} alt='' className='Page1_01Card2img2'></img>
        <img src={cardimg2} alt='' className='Page1_01Card2img1'></img>
        <img src={cardimg4} alt='' className='Page1_01Card2img3'></img>
        </div>
    </div>
  </div>
</div>
<div className='row brandrow'>
  <div className='col'><img src={brand1}></img></div>
  <div className='col'><img src={brand2}></img></div>
  <div className='col'><img src={brand3}></img></div>
  <div className='col'><img src={brand4}></img></div>
  <div className='col'><img src={brand5}></img></div>
</div>
        </div>
    );
}

export default Land01_1;