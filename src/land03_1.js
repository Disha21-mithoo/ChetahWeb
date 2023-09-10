import React, { Component } from 'react';
import "./land03_1.css";
import logoimg from "./images/logoimg.svg";
import handbg from "./images/hero-content-bg1.png";
import hand from "./images/Hand.png";



const Land03_1 = () => {
    return(
        <div class="land03_1">
        <br></br>
          <nav class="navbar navbar-expand-lg navbar-dark">
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
              <button class="btn btn-outline-light trialbtn">Get 14 Days Free Trial</button>
          </div>
        </div>
      </nav>
      <div class="container Fpagecontainer">
        <div class="row Fpagerow">
          <div class="col-lg-6">
            <div class="p-5 mt-4">
              <h1 className='Fpageh1'><b>Unleash the speed of your transactions.</b></h1>
              <p class="lead Fpagepara">Efficiently manage and resolve customer issues, improve satisfaction and boost your bottom line with our all-in-one customer.</p>
              <div>
    <a href="#" className="Fpagebtn"><span className='Fpagebtname'>Get 14 Days Free Trial</span></a>
    </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div className='imgCombined'>
              <img class="w-100 handimg" src={hand} />
              <img class=" handbg" src={handbg} /> 

            </div>
            
          </div>
        </div>
      </div>
        </div>
    );
}
export default Land03_1;