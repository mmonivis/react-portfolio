import React from 'react';

function About(){
	return(
		<div className="about text-center row section" id="about">
			<h1>about</h1>
			<div className="row about-statement hideme text-center col-md-12 col-xs-12">
				<div className="self-portrait col-lg-3 col-lg-offset-3 col-md-4 col-md-offset-2 col-sm-12">
					<img src="/assets/images/me.png" alt="Portrait of Marissa Monivis" />
				</div>
				<div className="bio col-lg-3 col-md-4 col-sm-12">
					<h3>A full stack web developer based in Atlanta, Georgia driven by simple, elegant design. With an extensive background in Graphic Design, Digital Marketing and Web Development, I am fascinated by the way people interact with the different platforms and user interfaces of the digital sphere.</h3>
				</div>
			</div>
			<div className="row edu-section col-xs-12">
				<div className="edu-item hideme col-md-2 col-md-offset-3 col-xs-12 col-sm-4">
					<img src="/assets/images/FSU_emblem.png" alt="Florida State University - Vires, Artes, Mores Emblem" />
					<h4>Bachelor of Arts</h4>
					<p>Studio Art</p>
					<p>Focus in Graphic Design</p>
				</div>
				<div className="edu-item-dc hideme col-md-2 col-sm-4 col-xs-12">
					<img src="/assets/images/DC-wrench.png" alt="DigitalCrafts Logo Wrench" />
					<h3>DigitalCrafts</h3>
					<h4>Full Stack Developer</h4>
					<p>Full Stack Immersive Program that covers full stack JavaScript, Python, Node.js & the MERN stack over the course of 16 weeks, with a rotating elective in the evenings.</p>
				</div>
				<div className="edu-item hideme col-md-2 col-sm-4 col-xs-12">
					<img src="/assets/images/FSU_emblem.png" alt="Florida State University - Vires, Artes, Mores Emblem" />
					<h4>Bachelor of Science</h4>
					<p>Information, Communication and Technology</p>
					<p>Focus in Digital Marketing</p>
				</div>
			</div>
			<div className="row skillset hideme col-xs-12">
				<h2>Skills</h2>
				<div className="skills-cat col-xs-12">
					<i className="devicon-html5-plain-wordmark"></i>
					<i className="devicon-css3-plain-wordmark"></i>
					<i className="devicon-javascript-plain"></i>
					<i className="devicon-jquery-plain-wordmark"></i>
					<i className="devicon-python-plain-wordmark"></i>
				</div>
				<div className="skills-cat col-xs-12">
					<i className="devicon-bootstrap-plain-wordmark"></i>
					<i className="devicon-react-original-wordmark"></i>
					<i className="devicon-sass-original"></i>
					<i className="devicon-express-original-wordmark"></i>
					<i className="devicon-mysql-plain-wordmark"></i>
					<i className="devicon-nodejs-plain-wordmark"></i>
				</div>
				<div className="skills-cat col-xs-12">
					{ /* <i className="devicon-facebook-plain"></i> */ }
					<i className="devicon-photoshop-line"></i>
					<i className="devicon-illustrator-line"></i>
					<i className="devicon-github-plain-wordmark"></i>
					<i className="devicon-sourcetree-plain-wordmark"></i>
				</div>
			</div>
		</div>
	)
}

export default About;