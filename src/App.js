import logo from './logo.svg';
import './App.css';
import logoimg from "./images/oLogo.svg";
import Land1 from "./images/land01.png";
import Land2 from "./images/land02.png";
import Land3 from "./images/land03.png";
import Land4 from "./images/land04.png";
import Land5 from "./images/land05.png";
import Land6 from "./images/land06.png";

function App() {
  return (
    <div className="App">
    {/* PRELOADER CODE */}
        {/* <div class="fbth-preloader-wrap">
          <div class="fbth-preloader">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           </div>
        </div> */}
    {/* HEADER STARTS */}
    <div class='site logisitco_page_wrap' id='page'><a class="skip-link screen-reader-text" href="#content">Skip to content</a></div>
    <header id="fbth-tb-header" class=" sticky-mobile-off sticky-shadow-on" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
      <div data-elementor-type="fbth-tb" data-elementor-id="415" class="elementor elementor-415">
				<section class="elementor-section elementor-top-section elementor-element elementor-element-9bd034e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default fbth-custom-animation-no FBTH-addons-sticky-no" data-id="9bd034e" data-element_type="section" data-settings="{&quot;fbth_animation_on&quot;:&quot;no&quot;,&quot;fbth_sticky&quot;:&quot;no&quot;}">
					<div class="elementor-container elementor-column-gap-default">
					  <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-35994df" data-id="35994df" data-element_type="column">
			        <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-d315309 FBTH-addons-sticky-no elementor-widget elementor-widget-fbth-logo" data-id="d315309" data-element_type="widget" data-settings="{&quot;fbth_sticky&quot;:&quot;no&quot;}" data-widget_type="fbth-logo.default">
				         <div class="elementor-widget-container">
			              <div class="fbth-site-logo content-align-left">
                     <a href="https://finestwp.co/demos/wp/chetah" class="fbth-site-logo-wrap">
                     <span class='site-logo'><img src={logoimg} title="oLogo" alt="oLogo" loading="lazy" /></span> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-da226d6" data-id="da226d6" data-element_type="column">
			        <div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-39e15b2 fbth-megamenu-position-container FBTH-addons-sticky-no elementor-widget elementor-widget-fbth-main-menu" data-id="39e15b2" data-element_type="widget" data-settings="{&quot;fbth_sticky&quot;:&quot;no&quot;}" data-widget_type="fbth-main-menu.default">
				          <div class="elementor-widget-container">
			              <div class="fbth-main-menu-wrap navbar menu-style-inline mobile-menu-style-1  ">
                      <button class="navbar-toggler open-menu" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" height="384pt" viewBox="0 -53 384 384" width="384pt"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path></svg>                </span>
                      </button>
                      {/* End of NAV Toggler. Now navbar inside work starts */}
                      <div class="navbar-inner">
                        <div class="fbth-mobile-menu"></div>
                        <div class="mobile-menu-logo">
                          <span>menu</span>
                        </div>
                        <button class="navbar-toggler close-menu" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon close"><svg xmlns="http://www.w3.org/2000/svg" height="329pt" viewBox="0 0 329.26933 329" width="329pt"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path></svg></span>
                        </button>
                        <nav id="site-navigation" class="main-navigation ">
                          <div class="fbth-menu-container">
                            <ul id="navbar-nav" class="navbar-nav">
                              {/*DEMO (li) option of navbar starts */}
                              <li id="menu-item-418" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-418 menu-item-has-children fbth-megamenu-builder-parent fbth-mega-menu"><a href="#">Demos</a>   
                                <ul class='fbth-addons-megamenu-builder-content-wrap sub-menu'>
                                  <li>
                                    <div data-elementor-type="fbth-tb" data-elementor-id="7369" class="elementor elementor-7369">
                                      <section class="elementor-section elementor-top-section elementor-element elementor-element-0c31327 elementor-section-boxed elementor-section-height-default elementor-section-height-default fbth-custom-animation-no FBTH-addons-sticky-no" data-id="0c31327" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;fbth_animation_on&quot;:&quot;no&quot;,&quot;fbth_sticky&quot;:&quot;no&quot;}">
						                            <div class="elementor-container elementor-column-gap-default">
                                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cec99f9" data-id="cec99f9" data-element_type="column">
			                                      <div class="elementor-widget-wrap elementor-element-populated">
                                              {/*DEMO-1st row section starts */}
                                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-ec616e1 elementor-section-boxed elementor-section-height-default elementor-section-height-default fbth-custom-animation-no FBTH-addons-sticky-no" data-id="ec616e1" data-element_type="section" data-settings="{&quot;fbth_animation_on&quot;:&quot;no&quot;,&quot;fbth_sticky&quot;:&quot;no&quot;}">
						                                    <div class="elementor-container elementor-column-gap-default">
                                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a071e1d" data-id="a071e1d" data-element_type="column">
			                                              <div class="elementor-widget-wrap elementor-element-populated">
                                                      <div class="elementor-element elementor-element-f8aa263 elementor-position-left elementor-vertical-align-middle FBTH-addons-sticky-no elementor-widget elementor-widget-image-box" data-id="f8aa263" data-element_type="widget" data-settings="{&quot;fbth_sticky&quot;:&quot;no&quot;}" data-widget_type="image-box.default">
				                                                <div class="elementor-widget-container">
                                                         <div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><a href="https://finestwp.co/demos/wp/chetah/"><img width="628" height="484" src={Land1} class="elementor-animation-float attachment-full size-full wp-image-10601" alt="" loading="lazy" /></a></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title"><a href="https://finestwp.co/demos/wp/chetah/">Landing 01</a></h3><p class="elementor-image-box-description">Colorful website for any startup</p></div></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-fb96e9b" data-id="fb96e9b" data-element_type="column">
			                                              <div class="elementor-widget-wrap elementor-element-populated">
								                                      <div class="elementor-element elementor-element-f09c0a8 elementor-position-left elementor-vertical-align-middle FBTH-addons-sticky-no elementor-widget elementor-widget-image-box" data-id="f09c0a8" data-element_type="widget" data-settings="{&quot;fbth_sticky&quot;:&quot;no&quot;}" data-widget_type="image-box.default">
				                                                <div class="elementor-widget-container">
			                                                    <div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><a href="https://finestwp.co/demos/wp/chetah/landing-02/"><img width="628" height="484" src={Land2} class="elementor-animation-float attachment-full size-full wp-image-10602" alt="" loading="lazy" /></a></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title"><a href="https://finestwp.co/demos/wp/chetah/landing-02/">Landing 02</a></h3><p class="elementor-image-box-description">Trendy SaaS website targeted on product</p></div></div>		
                                                        </div>
				                                              </div>
					                                          </div>
		                                              </div>
                                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-04cb588" data-id="04cb588" data-element_type="column">
			                                              <div class="elementor-widget-wrap elementor-element-populated">
								                                      <div class="elementor-element elementor-element-612877a elementor-position-left elementor-vertical-align-middle FBTH-addons-sticky-no elementor-widget elementor-widget-image-box" data-id="612877a" data-element_type="widget" data-settings="{&quot;fbth_sticky&quot;:&quot;no&quot;}" data-widget_type="image-box.default">
				                                                <div class="elementor-widget-container">
			                                                    <div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><a href="https://finestwp.co/demos/wp/chetah/landing-03"><img width="628" height="484" src={Land3} class="elementor-animation-float attachment-full size-full wp-image-10603" alt="" loading="lazy" /></a></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title"><a href="https://finestwp.co/demos/wp/chetah/landing-03">Landing 03</a></h3><p class="elementor-image-box-description">Modern & clean fintech SaaS website</p></div></div>		
                                                        </div>
				                                              </div>
					                                          </div>
							                                    </div>
                                                </div>
                                              </section> {/*DEMO-1st row section ends */}
                                              {/*DEMO-2nd row section starts */}
                                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-57e7580 elementor-section-boxed elementor-section-height-default elementor-section-height-default fbth-custom-animation-no FBTH-addons-sticky-no" data-id="57e7580" data-element_type="section" data-settings="{&quot;fbth_animation_on&quot;:&quot;no&quot;,&quot;fbth_sticky&quot;:&quot;no&quot;}">
						                                    <div class="elementor-container elementor-column-gap-default">
					                                        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d0aebc2" data-id="d0aebc2" data-element_type="column">
			                                              <div class="elementor-widget-wrap elementor-element-populated">
								                                      <div class="elementor-element elementor-element-7b2b3bf elementor-position-left elementor-vertical-align-middle FBTH-addons-sticky-no elementor-widget elementor-widget-image-box" data-id="7b2b3bf" data-element_type="widget" data-settings="{&quot;fbth_sticky&quot;:&quot;no&quot;}" data-widget_type="image-box.default">
				                                                <div class="elementor-widget-container">
			                                                    <div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><a href="https://finestwp.co/demos/wp/chetah/landing-04"><img width="628" height="484" src={Land4} class="elementor-animation-float attachment-full size-full wp-image-10604" alt="" loading="lazy" /></a></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title"><a href="https://finestwp.co/demos/wp/chetah/landing-04">Landing 04</a></h3><p class="elementor-image-box-description">Bright & clean web app website</p></div></div>
                                                        </div>
				                                              </div>
					                                          </div>
		                                              </div>
                                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-da10cce" data-id="da10cce" data-element_type="column">
			                                              <div class="elementor-widget-wrap elementor-element-populated">
								                                      <div class="elementor-element elementor-element-f22850a elementor-position-left elementor-vertical-align-middle FBTH-addons-sticky-no elementor-widget elementor-widget-image-box" data-id="f22850a" data-element_type="widget" data-settings="{&quot;fbth_sticky&quot;:&quot;no&quot;}" data-widget_type="image-box.default">
				                                                <div class="elementor-widget-container">
			                                                    <div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><a href="https://finestwp.co/demos/wp/chetah/landing-05"><img width="628" height="484" src={Land5} class="elementor-animation-float attachment-full size-full wp-image-10605" alt="" loading="lazy" /></a></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title"><a href="https://finestwp.co/demos/wp/chetah/landing-05">Landing 05</a></h3><p class="elementor-image-box-description">Colorful & trendy mobile app website</p></div></div>		
                                                        </div>
				                                              </div>
					                                          </div>
		                                              </div>
                                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5493f2f" data-id="5493f2f" data-element_type="column">
			                                              <div class="elementor-widget-wrap elementor-element-populated">
								                                      <div class="elementor-element elementor-element-3250872 elementor-position-left elementor-vertical-align-middle FBTH-addons-sticky-no elementor-widget elementor-widget-image-box" data-id="3250872" data-element_type="widget" data-settings="{&quot;fbth_sticky&quot;:&quot;no&quot;}" data-widget_type="image-box.default">
				                                                <div class="elementor-widget-container">
			                                                   <div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><a href="https://finestwp.co/demos/wp/chetah/landing-06"><img width="628" height="484" src={Land6} class="elementor-animation-float attachment-full size-full wp-image-10606" alt="" loading="lazy" /></a></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title"><a href="https://finestwp.co/demos/wp/chetah/landing-06">Landing 06</a></h3><p class="elementor-image-box-description">Illustrated trendy website for startups</p></div></div>		
                                                        </div>
				                                              </div>
					                                          </div>
		                                              </div>
                                                </div>
                                              </section> {/*DEMO-2nd row section ends */}
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
							                    </li>
                                </ul>
                              </li>{/*DEMO ends Now, next li essential pages start */}
                              <li id="menu-item-10655" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10655 menu-item-has-children fbth-megamenu-builder-parent fbth-mega-menu"><a href="#">Essential Pages</a>
                                <ul class='fbth-addons-megamenu-builder-content-wrap sub-menu'>
                                  <li>
                                    <div data-elementor-type="fbth-tb" data-elementor-id="10632" class="elementor elementor-10632">
                                      
                                    </div>
                                  </li>
                                </ul>
                              </li>{/*essential pages ends Now, next li blog start */}
                            </ul>
                          </div>
                        </nav>
                      </div>{/*Navbar inner END*/ }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
    </div>
  );
}

export default App;
