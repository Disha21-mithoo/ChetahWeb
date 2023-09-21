import React, { Component } from 'react';
import "./land04_1.css";
import logoimg from "./images/oLogo.svg";





const Land04_1 = () => {
    return(
        <div className='land04_1'>

<nav class="navbar navbar-expand-lg navbar04">
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
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item " href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
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
              <button class="btn btn-outline-dark navbtn04"><b>Start Free Trial</b></button>
          </div>
        </div>
      </nav>
      <h1 className='page02_1h1'>Manage larger files fast</h1>
      <h6 className='page02_1p1'>Say goodbye to lost in tons of tasks and hello to productive management with our user-friendly platform.</h6>
      <div className='row page04_1Row'>
       <div className='col-1'></div>
       <div className='col-5 bt1'>
       <a href="#" className="Fpage04btn"><span className='Fpage04btname'>Get 14 Days Free Trial</span></a>
       </div>
       <div className='col-5 pp'>
       <button type="button" class="btn btn-light bt2">Talk to Sales Team</button>
       </div>
       <div className='col-1'></div>
      </div>
      <div className='row mmt'>
        <div className='col-6 p1w'>No credit card required</div>
        <div className='col-6 p2w'>Cancle anytime</div>
      </div>


        </div>
    );
}
export default Land04_1;