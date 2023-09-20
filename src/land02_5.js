import React, { Component } from 'react';
import "./land02_5.css";
import gg from "./images/content-img3-1.png";
import gg1 from "./images/card-8.png";



const Land02_5 = () => {
    return(
        <div className='land02_5'>
        <div className='row page02_5Row1'>
        <div class="col-sm-6 mb-3 mb-sm-0 page02_5col1">
        
            <h1>App is here to make life easier for you.</h1>
            <p className='page02_5col1p'>App gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
            
            <a href="#" className="Fpage022btn"><span className='Fpage022btname'>Get 14 Days Free Trial</span></a>
            <hr className='hrline'></hr>
            <div className='row page02_5Row2'>
                <div className='col-6'><h5>Unlimited Resources</h5>
                <p className='ro2p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
                <a href="#"><h6 className='ssd'>Download Free Resources</h6></a></div>
                <div className='col-6'><h5>Figma Included</h5>
                <p className='ro2p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
                <a href="#"><h6 className='ssd'>Download Figma Files</h6></a></div>
                
                
            </div>
            
        </div>
        <div className='col-6 page02_5col2'>
            <img className="col2_img12" src={gg}></img>
             <img className='coimg22 vert-move1' src={gg1}></img> 
        </div>
        </div>
        </div>
    );
}
export default Land02_5;