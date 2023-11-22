import React from 'react'

function ContactForm() {
  return (
    // <!-- Contact Section Start -->
        <section id="contact" class="contact-area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 section-title">
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-5">
                        <div class="row contact-information">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="contact-details">
                                    <i class="fa fa-phone"></i>
                                    <h6>Call us</h6>
                                    <p>+105 773 321 7771</p>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="contact-details">
                                    <i class="fa fa-home"></i>
                                    <h6>Visit us</h6>
                                    <p>4 South Birchwood Ave.</p>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="contact-details">
                                    <i class="fa fa-envelope"></i>
                                    <h6>Email us</h6>
                                    <p>demo@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-7">
                        <p class="form-message"></p>
                        <br/>
                        <form class="contact-form form" id="contact-form" action="mail.php" method="POST">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group has-error has-danger">
                                            <input id="form_name" type="text" name="name" placeholder="Type Your Name"
                                                required="required"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group has-error has-danger">
                                            <input id="form_email" type="email" name="email"
                                                placeholder="Type Your Email" required="required"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group has-error has-danger">
                                            <input id="form_subject" type="text" name="subject"
                                                placeholder="Type Your Subject" required="required"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <textarea id="form_message" name="message" placeholder="Type Your Message"
                                                rows="4" required="required"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" class="button" data-text="Send Message"><span>Send
                                                Message</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      // <!-- Contact Section End -->
  )
}

export default ContactForm