import React, { Component } from 'react';
import "./land02_3.css";
import l1 from "./images/l1.png";
import l2 from "./images/l2.png";
import l3 from "./images/l3.png";



const Land02_3 = () => {
    return(
        <div className='land02_3'>
        <h5 className='page02_3h5'>Why get Chetah</h5>
        <h1 className='page02_3h1'>All you need to run your brands effectively</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 page02_3row">
        <div className="col">
    <div className="card page02_3card">
    <img src={l1} className="limg card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">Innovative Solutions</h5>
        <p className="card-text">Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel.</p>
      </div>
    </div>
    </div>
    <div className="col">
    <div className="card page02_3card">
    <img src={l2} className="limg card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">Easy to Go Live</h5>
        <p className="card-text">Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel.</p>
      </div>
    </div>
    </div>
    <div className="col">
    <div className="card page02_3card">
    <img src={l3} className="limg card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">Great Analytics</h5>
        <p className="card-text">Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel.</p>
      </div>
    </div>
    </div>
    
        </div>
        </div>
    );
}

export default Land02_3;