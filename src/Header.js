import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

function Header() {
	return(
		<div className="header col-xs-12">
			<Logo />
			<Navbar />
		</div>
	)
}

export default Header;

// <div className="social-media-header col-xs-4">
// 	<a href="http://www.facebook.com/marissamonivis" target="_blank" className="fa fa-facebook"></a>
// 	<a href="http://www.instagram.com/rissamonivis" target="_blank" className="fa fa-instagram"></a>
// 	<a href="http://www.github.com/mmonivis" target="_blank" className="fa fa-github"></a>
// 	<a href="http://www.linkedin.com/in/marissamonivis" target="_blank" className="fa fa-linkedin"></a>
// 	<a href="mailto:mmonivis@gmail.com" className="fa fa-envelope"></a>
// 	<a href="#" target="_blank" className="fa fa-file"></a>
// </div>