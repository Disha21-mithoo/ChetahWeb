import React, { Component } from 'react';
import "./land03_2.css";
import cashless from "./images/cashless.png";
import safe from "./images/safe.png";
import caard from "./images/card.png";



const Land03_2 = () => {
    return(
        <div class="land03_2">
            <div class="row SpageRow">
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card SpageCard">
      <div class="card-body">
        <div className='row'>
          <div className='col-3'>
            <img src={cashless} className='Spageicon'></img>
          </div>
          <div className='col-9'>
            <h5 class="card-title SpageCardtitle">100% Cashless Payments</h5>
           <p class="card-text SpageCardText">Chetah gives you the blocks & sections you need to create a truly professional website, landing page or admin panel.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card SpageCard">
      <div class="card-body">
      <div className='row'>
          <div className='col-3'>
            <img src={safe} className='Spageicon'></img>
          </div>
          <div className='col-9'>
            <h5 class="card-title SpageCardtitle">Secured & Safe</h5>
           <p class="card-text SpageCardText">Chetah gives you the blocks & sections you need to create a truly professional website, landing page or admin panel.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card SpageCard">
      <div class="card-body">
      <div className='row'>
          <div className='col-3'>
            <img src={caard} className='Spageicon'></img>
          </div>
          <div className='col-9'>
            <h5 class="card-title SpageCardtitle">Make Quick Transfers</h5>
           <p class="card-text SpageCardText">Chetah gives you the blocks & sections you need to create a truly professional website, landing page or admin panel.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Land03_2;