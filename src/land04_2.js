import React, { Component } from 'react';
import "./land04_2.css";
import l1 from "./images/l1.png";
import l2 from "./images/l2.png";
import l3 from "./images/l3.png";
import crd from "./images/content-card8.png";





const Land04_2 = () => {
    return(
        <div className='land04_2'>
            <div className='pgbg'>
                <img src={crd}></img>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 page02_3row">
        <div className="col">
    <div className="card page04card">
    <img src={l1} className="limg2 card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">Innovative Solutions</h5>
        <p className="card-text">Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel.</p>
      </div>
    </div>
    </div>
    <div className="col">
    <div className="card page04card">
    <img src={l2} className="limg2 card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">Easy to Go Live</h5>
        <p className="card-text">Chetah gives you the blocks & components you need to create a truly professional website, landing page or admin panel.</p>
      </div>
    </div>
    </div>
    <div className="col">
    <div className="card page04card">
    <img src={l3} className="limg2 card-img-top" alt=""></img>
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

export default Land04_2;