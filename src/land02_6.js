import React from 'react';
import "./land02_6.css";
import cc from "./images/check-mark.png";



const Land02_6 = () => {
    return(
        <div className='land02_6'>
            <h5>Say hello to New Feature</h5>
            <h1>Unlimited options give you the ultimate flexibility</h1>
            
            <div className='row page02_6Row1'>
                <div className='col-lg-1 col-sm-2'></div>

                <div className='col-lg-5 col-sm-6'>
                <div className='card card02'>
                    <div className='row'>
                       
                        <div className='col-1'><img className='chkmrk' src={cc} alt=''></img></div>
                        <div className='col-10'><p>Unlimited Projects: App gives you the blocks & components you need to create a website.</p></div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-sm-6'>
                <div className='card card02'>
                    <div className='row'>
                       
                        <div className='col-1'><img className='chkmrk' src={cc} alt=''></img></div>
                        <div className='col-10'><p>Unlimited Projects: App gives you the blocks & components you need to create a website.</p></div>
                        </div>
                    </div>
                </div>
               
                <div className='col-lg-1 col-sm-2'></div>
            </div>
            <div className='row page02_6Row1'>
                <div className='col-lg-1 col-sm-2'></div>

                <div className='col-lg-5 col-sm-6'>
                <div className='card card02'>
                    <div className='row'>
                       
                        <div className='col-1'><img className='chkmrk' src={cc} alt=''></img></div>
                        <div className='col-10'><p>Unlimited Projects: App gives you the blocks & components you need to create a website.</p></div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-sm-6'>
                <div className='card card02'>
                    <div className='row'>
                       
                        <div className='col-1'><img className='chkmrk' src={cc} alt=''></img></div>
                        <div className='col-10'><p>Unlimited Projects: App gives you the blocks & components you need to create a website.</p></div>
                        </div>
                    </div>
                </div>
               
                <div className='col-lg-1 col-sm-2'></div>
            </div>
        </div>
    );
}

export default Land02_6;