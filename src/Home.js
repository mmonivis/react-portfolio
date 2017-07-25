import React from 'react';

function Home() {
	return(
		<div className="home-bg">
			<div className="home-wrapper" id="home"></div>
			<div className="name-intro col-xs-12 col-md-4 col-md-offset-8">
				<h1>Hi, I'm Marissa</h1>
				<h2>
					I am <span className="typeit"></span>
				</h2>
			</div>
		</div>
	)
}

export default Home;