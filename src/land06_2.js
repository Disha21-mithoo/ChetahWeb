import React, { Component } from 'react';
import "./land06_2.css";
import ff from "./images/l5-testi-1.png";




const Land06_2 = () => {
    return(
        <div className='land06_2'>
            <div className='row land06_2Row'>
                <div className='col'>
                    <h1>2X</h1>
                    <p>A multiplier that suggests double the performance when compared to the competition.</p>
                </div>
                <div className='col'>
                <h1>97.5%</h1>
                    <p>Use a percentage number to suggest the increase in results to expect.</p>
                </div>
                <div className='col-lg-6'>
                    <h3>“With Chetah , performance has increased by 150% within a month.”</h3>
                    <div className='row pp'>
                    
                        <div className='col-1'><img src={ff}></img></div>
                        <div className='col-4'><h5>Andrew Pearson </h5><p className='g'>Founder,Company</p></div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
export default Land06_2;