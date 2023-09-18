import React, { Component } from 'react';
import "./land02_1.css";
import logoimg from "./images/oLogo.svg";





const Land02_1 = () => {
    return(
        <div className='land02_1'>

<nav class="navbar navbar-expand-lg navbar02">
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
              <button class="btn btn-outline-dark navbtn02"><b>Start Free Trial</b></button>
          </div>
        </div>
      </nav>
      <h1 className='page02_1h1'>Project Management Made Easy</h1>
      <h6 className='page02_1p1'>Say goodbye to lost in tons of tasks and hello to productive management with our user-friendly platform.</h6>
      <a href="#" className="Fpage02btn"><span className='Fpage02btname'>Get 14 Days Free Trial</span></a>
      <span className='row page02_1Row'>
        <div className='col-sm-3 col-0'></div>
        <span className='col-sm-2 col-12'><h6><i class="fa fa-check ttk"></i> Free 7-day trial</h6></span>
        
        <span className='col-sm-2 col-12'><h6><i class="fa fa-check ttk"></i> No creditcard needed</h6></span>
        
        <span className='col-sm-2 col-12'><h6><i class="fa fa-check ttk"></i> Cancel anytime</h6></span>
        <div className='col-sm-3 col-0'></div>
      </span>


        </div>
    );
}
export default Land02_1;