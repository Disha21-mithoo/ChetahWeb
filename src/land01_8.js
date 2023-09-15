import React, { Component } from 'react';
import "./land01_8.css";
import slackimg from "./images/slack.png";
import figma from "./images/figma.png";
import spotify from "./images/spotify.png";
import mailchimp from "./images/mailchimp.png";
import zoom from "./images/zoom.png";
import shopify from "./images/shopify.png";

const Land01_8 = () => {
    return(
        <div className='land01_8'>
        <div className=' row page01_8Row1'>
        
        <div className='col-12 col1page01_8'> <h1 className='page01_8h1'>Integrates with all essential apps</h1></div>
        
        <div className='col-12 col1page01_8'><h5 className='page01_8h5'>Amet minim mollit non deserunt ullamco est site aliqua dolor. velit amet suiget officia. Exercitation veniam consequat sit.</h5>
            </div>
            
            
        </div>
        <div className='row page01_8Row2'>
            <div className='col-4'>
                <div className='card page01_8Card'>
                    <div className='row'>
                        <div className='col-2'><img src={slackimg} className='logimg'></img></div>
                        <div className='col-10'>
                            <h4>Slack</h4>
                            <p>On the other hand denounce with right eous info and dislike beguled</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='card page01_8Card'>
                <div className='row'>
                        <div className='col-2'><img src={shopify} className='logimg'></img></div>
                        <div className='col-10'>
                            <h4>Shopify</h4>
                            <p>On the other hand denounce with right eous info and dislike beguled</p>
                        </div>
                </div></div>
            </div>
            <div className='col-4'>
                <div className='card page01_8Card'>
                <div className='row'>
                        <div className='col-2'><img src={spotify} className='logimg'></img></div>
                        <div className='col-10'>
                            <h4>Spotify</h4>
                            <p>On the other hand denounce with right eous info and dislike beguled</p>
                        </div>
                </div></div>
            </div>
            <div className='col-4'>
                <div className='card page01_8Card'>
                <div className='row'>
                        <div className='col-2'><img src={zoom} className='logimg'></img></div>
                        <div className='col-10'>
                            <h4>Zoom</h4>
                            <p>On the other hand denounce with right eous info and dislike beguled</p>
                        </div>
                </div></div>
            </div>
            <div className='col-4'>
                <div className='card page01_8Card'>
                <div className='row'>
                        <div className='col-2'><img src={mailchimp} className='logimg'></img></div>
                        <div className='col-10'>
                            <h4>Mailchimp</h4>
                            <p>On the other hand denounce with right eous info and dislike beguled</p>
                        </div>
                </div></div>
            </div>
            <div className='col-4'>
                <div className='card page01_8Card'>
                <div className='row'>
                        <div className='col-2'><img src={figma} className='logimg'></img></div>
                        <div className='col-10'>
                            <h4>Figma</h4>
                            <p>On the other hand denounce with right eous info and dislike beguled</p>
                        </div>
                </div></div>
            </div>
            
        </div>
        </div>
    );
}
export default Land01_8;