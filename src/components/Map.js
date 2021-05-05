import React from 'react';
 const map=()=>{
    return(
        <>
            <div className="page section-header text-center">
                <div className="page-title">
                    <div className="wrapper"><h1 className="page-width">Contact Us</h1></div>
                </div>
            </div>
        
            <div className="map-section map">
        	    <iframe src="https://www.google.com/maps/embed?pb=" height="350" allowFullScreen></iframe>
                <div className="container">
            	    <div className="row">
                	    <div className="map-section__overlay-wrapper">
                            <div className="map-section__overlay">
                                <h3 className="h4">Our store</h3>
                                <div className="rte-setting">
                                <p>123 Fake St.<br/>Toronto, Canada</p>
                                <p>Mon - Fri, 10am - 9pm<br/>Saturday, 11am - 9pm<br/>Sunday, 11am - 5pm</p>
                            </div>
                            <p><a href="https://maps.google.com/?daddr=80%20Spadina%20Ave,%20Toronto" className="btn btn--secondary btn--small" target="_blank">Get directions</a></p>
                        </div>
                   	</div>
                </div>
            </div>
        </div>

            <div className="bredcrumbWrap">
                <div className="container breadcrumbs">
                    <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">›</span><span>Contact Us</span>
                </div>
            </div>
        </>
    );
}
export default map;