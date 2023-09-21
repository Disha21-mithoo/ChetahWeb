import React, { Component } from 'react';
import "./land05_1.css";
import logoimg from "./images/oLogo.svg";
import ssd from "./images/ssd.png";
import lg from "./images/whitelogo.svg";




const Land05_1 = () => {
    return(
        <div class="land05_1">



<nav class="navbar navbar-expand-lg navbar-dark navbar05">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><span><img src={lg}></img></span></a>
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
            <button class="btn btn-outline-dark navbtn05">Start Free Trial</button>
          </div>
        </div>
      </nav>

      <div className='row Page05_1Row'>
        <div className='col-lg-6 col-sm-12'>
        <button className='row05btn'>Award winning startup of 2022!</button>
          <h1>Help you manage your team with a Remote HR.</h1>
          <p>Say goodbye to lost in tons of tasks and hello to productive management with our user-friendly platform.</p>
          <a href="#" className="Fpage05btn"><span className='Fpage05btname'>Get 14 Days Free Trial</span></a>
        </div>
        <div className='col-lg-6 col-sm-12'>
            <div>
                <img src={ssd} className='ssdimg'></img>
            </div>
        </div>
      </div>



        </div>
    );
}
export default Land05_1;