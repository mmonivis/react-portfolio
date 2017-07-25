import React from 'react';

function Footer() {
	return(
		<div className="footer col-xs-12 text-center">
			<div className="social-media col-xs-12">
				<a href="http://www.facebook.com/marissamonivis" target="_blank" className="fa fa-facebook"></a>
				<a href="http://www.instagram.com/rissamonivis" target="_blank" className="fa fa-instagram"></a>
				<a href="http://www.github.com/mmonivis" target="_blank" className="fa fa-github"></a>
				<a href="http://www.linkedin.com/in/marissamonivis" target="_blank" className="fa fa-linkedin"></a>
			</div>
			<div className="copywrite col-xs-12">
				Made with love &copy; Marissa Monivis
			</div>
			<div className="site-technologies col-xs-12">
				HTML | CSS3 | JavaScript | jQuery | Sass | React
			</div>
		</div>
	)
}

export default Footer;