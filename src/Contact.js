import React from 'react';

function Contact() {
	return(
		<div className="contact section col-xs-12 text-center" id="contact">
			<h1>contact</h1>
			<div className="contact-header col-xs-12">
				<h3>Interested in working together? Lets chat!</h3>
				<div className="email-resume col-xs-12">
					<div className="email col-xs-12 col-md-2 col-md-offset-4">
						<a className="contact-button" href="mailto:mmonivis@gmail.com">EMAIL</a>
					</div>
					<div className="resume col-xs-12 col-md-2">
						<a className="contact-button" href="/assets/images/MarissaMonivis_Resume2017_DC.pdf">RESUME</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;