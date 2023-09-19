import React, { Component } from 'react';
import "./land02_2.css";
import cd1 from "./images/cd1.png";
import cd2 from "./images/cd2.png";
import cd3 from "./images/cd3.png";
import cd4 from "./images/cd4.png";
import cd5 from "./images/cd5.png";







const Land02_2 = () => {
    return(
        <div className='land02_2'>
        <div className='page02_2bg'>
        <div className='row'>
        <div className='col-4'>
            <img src={cd1} className='cdimg1 vert-move'></img></div>
        <div className='col-4'>
        <img src={cd2} className='cdimg2'></img></div>
        <div className='col-4'>
            <img src={cd3} className='cdimg3'></img></div>
        </div>   
        <div className='row'>
        <div className='col-4'>
            <img src={cd4} className='cdimg4'></img></div>
        <div className='col-4'>
        </div>
        <div className='col-4'>
            <img src={cd5} className='cdimg5 vert-move'></img></div>
        </div>  
        </div>
        <h4>Best rated design tool in G2 and loved by world’s best designers</h4>
        </div>
    );
}
export default Land02_2;