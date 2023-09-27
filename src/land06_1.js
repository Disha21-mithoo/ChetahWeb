import React, { Component } from 'react';
import "./land06_1.css";
import logoimg from "./images/oLogo.svg";
import dd from "./images/l5-con-1.png";
import ll1 from "./images/l5-brand-01.svg";
import ll2 from "./images/l5-brand-02.svg";
import ll3 from "./images/l5-brand-03.svg";
import ll4 from "./images/l5-brand-04.svg";
import ll5 from "./images/l5-brand-05.svg";
import Land1 from "./images/land01.png";
import Land2 from "./images/land02.png";
import Land3 from "./images/land03.png";
import Land4 from "./images/land04.png";
import Land5 from "./images/land05.png";
import Land6 from "./images/land06.png";




const Land06_1 = () => {
    return(
        <div className='land06_1'>
            <nav class="navbar navbar-expand-lg navbar06">
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
                  <li><a class="dropdown-item " href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown navMainli">
                <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Help
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item " href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              
            </ul>
              <button class="btn btn-outline-dark navbtn01"><b>Start Free Trial</b></button>
          </div>
        </div>
      </nav>
      <hr></hr>
      <div className='row page06_1Row'>
        <div className='col-lg-6 col-sm-12'>
            <img src={dd}></img>
        </div>
        <div className='col-lg-6 col-sm-12'>
            <h1>Build websites with mobile focus.</h1>
            <p>Say goodbye to lost in tons of tasks and hello to productive management with our user-friendly website platform.</p>
           <div className='btnn6'> <a href="#" className="Fpage06btn"><span className='Fpage06btname'>Get 14 Days Free Trial</span></a></div>
           <h6>Loved by world’s best designers</h6>
           <div className='row page06_1row2'>
            <div className='col-sm-4 col-6'><img src={ll1}></img></div>
            <div className='col-sm-4 col-6'><img src={ll2}></img></div>
            <div className='col-sm-4 col-6'><img src={ll3}></img></div>
            <div className='col-sm-4 col-6'><img src={ll4}></img></div>
            <div className='col-sm-4 col-6'><img src={ll5}></img></div>
           </div>
        </div>
      </div>

        </div>
    );
}
export default Land06_1;