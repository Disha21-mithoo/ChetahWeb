import React, { Component } from 'react';
import "./land05_2.css";
import hh from "./images/table.png";




const Land05_2 = () => {
    return(
        <div class="land05_2">
            <h1>Less Clicks, More Build</h1>
            <p>Use this table to compare your product competitor and show a customer just how good on-brand home.</p>
        
        

<div id="exTab2" class="container">	
<ul class="nav nav-tabs">
			<li class="active">
        <a  href="#1" data-toggle="tab">Manage</a>
			</li>
			<li><a href="#2" data-toggle="tab">Customise</a>
			</li>
			<li><a href="#3" data-toggle="tab">Release</a>
			</li>
		</ul>

			<div class="tab-content ">
			  <div class="tab-pane active" id="1">
          <div className='row'>
            <div className='col-lg-6 col-sm-12 hhbg' >
               <img src={hh} className='hh'></img>
            </div>
            <div className='col-lg-6 col-sm-12 col2-05' >
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <h3>Manage Files</h3>
                            <p>Create an on-brand home for your product and save countless hours on design time. Use this table to compare your product competitor and save.</p>
                        </div>
                    </div>
                    <div className='col-12'>
                    <div className='card'>
                            <h3>Sort by Order</h3>
                            <p>Create an on-brand home for your product and save countless hours on design time.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>


				</div>
				<div class="tab-pane" id="2">
                <div className='row'>
            <div className='col-lg-6 col-sm-12 hhbg' >
               <img src={hh} className='hh'></img>
            </div>
            <div className='col-lg-6 col-sm-12 col2-05' >
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <h3>Customise Files</h3>
                            <p>Create an on-brand home for your product and save countless hours on design time. Use this table to compare your product competitor and save.</p>
                        </div>
                    </div>
                    <div className='col-12'>
                    <div className='card'>
                            <h3>Sort by Order</h3>
                            <p>Create an on-brand home for your product and save countless hours on design time.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
				</div>
        <div class="tab-pane" id="3">
        <div className='row'>
            <div className='col-lg-6 col-sm-12 hhbg' >
               <img src={hh} className='hh'></img>
            </div>
            <div className='col-lg-6 col-sm-12 col2-05' >
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <h3>Release Files</h3>
                            <p>Create an on-brand home for your product and save countless hours on design time. Use this table to compare your product competitor and save.</p>
                        </div>
                    </div>
                    <div className='col-12'>
                    <div className='card'>
                            <h3>Sort by Order</h3>
                            <p>Create an on-brand home for your product and save countless hours on design time.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
				</div>
			</div>
  </div>

<hr></hr>







	


        </div>
    );
}

export default Land05_2;