import React from 'react';

function Navbar() {
	return(
		<div className="navbar">
			<ul className="nav nav-links fullpage-nav">
		    	<li className=""><a href="#home">home</a></li>
		    	<li className=""><a href="#about">about</a></li>
		    	<li className=""><a href="#work">work</a></li>
		    	<li className=""><a href="#contact">contact</a></li>
		    </ul>
			<div id="navToggle">
				<input type="checkbox" />

				<span></span>
				<span></span>
				<span></span>

				<ul id="mobile-nav">
					<li className=""><a href="#home">home</a></li>
					<li className=""><a href="#about">about</a></li>
					<li className=""><a href="#work">work</a></li>
					<li className=""><a href="#contact">contact</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;