import React from 'react';
const ContactInfo=()=>{
    return(
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                	<div className="open-hours">
                    	<strong>Opening Hours</strong><br/>
						Mon - Sat : 9am - 11pm<br/>
						Sunday: 11am - 5pm
                    </div>
                	<hr />
                    <ul className="addressFooter">
                        <li><i className="icon anm anm-map-marker-al"></i><p>55 Gallaxy Enque, 2568 steet, 23568 NY</p></li>
                        <li className="phone"><i className="icon anm anm-phone-s"></i><p>(440) 000 000 0000</p></li>
                        <li className="email"><i className="icon anm anm-envelope-l"></i><p>sales@yousite.com</p></li>
                    </ul>
                    <hr />
                    <ul className="list--inline site-footer__social-icons social-icons">
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Facebook"><i className="icon icon-facebook"></i></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Twitter"><i className="icon icon-twitter"></i> <span className="icon__fallback-text">Twitter</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Pinterest"><i className="icon icon-pinterest"></i> <span className="icon__fallback-text">Pinterest</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Instagram"><i className="icon icon-instagram"></i> <span className="icon__fallback-text">Instagram</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Tumblr"><i className="icon icon-tumblr-alt"></i> <span className="icon__fallback-text">Tumblr</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on YouTube"><i className="icon icon-youtube"></i> <span className="icon__fallback-text">YouTube</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Vimeo"><i className="icon icon-vimeo-alt"></i> <span className="icon__fallback-text">Vimeo</span></a></li>
                    </ul>
                </div>
        
        
    )
}
export default ContactInfo;