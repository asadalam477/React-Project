import React from 'react'
const contactform=()=>{
    return(
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 mb-4">
                	<h2>Drop Us A Line</h2>
                    <p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500 </p>
                	<div className="formFeilds contact-form form-vertical">
                      <form action="http://annimexweb.com/items/belle/assets/php/mail.php" method="post"  id="contact_form" className="contact-form">	
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        	<div className="form-group">
                          	<input type="text" id="ContactFormName" name="name" placeholder="Name" value="" required="" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        	<div className="form-group">
							<input type="email" id="ContactFormEmail" name="email" placeholder="Email" value="" required="" />                        	
                            </div>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          	<div className="form-group">
                            <input required="" type="tel" id="ContactFormPhone" name="phone" pattern="[0-9\-]*" placeholder="Phone Number" value="" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          	<div className="form-group">
                            <input required="" type="text" id="ContactSubject" name="subject" placeholder="Subject" value="" />
                            </div>
                          </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        	<div className="form-group">
                            <textarea required="" rows="10" id="ContactFormMessage" name="message" placeholder="Your Message"></textarea>
                            </div>
                        </div>  
                      </div>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <input type="submit" className="btn" value="Send Message" />
                        </div>
                     </div>
                     </form>
                    </div>
                </div>
    )

}
export default contactform;