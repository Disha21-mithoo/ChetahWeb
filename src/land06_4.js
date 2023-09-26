import React, { Component } from 'react';
import "./land06_4.css";
import ttm from "./images/l5-content-4.png";




const Land06_4 = () => {
    return(
        <div className='land06_4'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <h1>Create a personable presence for your brand.</h1>
                    <p className='p1'>Use and re-use tons of responsive sections too a main create the perfect layout. Sections are firmly of organised into the perfect start convenient categories.</p>
                    <div className='row mms'>
                        <div className='col-6'>
                            <h5>Transactions</h5>
                            <p>Use and re-use responsive sections too a main create the perfect layout.</p>
                        </div>
                        <div className='col-6'>
                        <h5>Summaries</h5>
                            <p>Use and re-use responsive sections too a main create the perfect layout.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <img src={ttm}></img>
                </div>
            </div>
        </div>
    );
}
export default Land06_4;