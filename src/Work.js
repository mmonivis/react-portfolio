import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import cycSlope from './work/cycSlope';

class Work extends Component {
	render(){
		return(
			<div className="work section" id="work">
				<h1>work</h1>
					<div className="cycslope-preview hideme">
						<div className="title text-center col-xs-12 col-md-3 col-md-offset-2">
							cycSlope
							<div className="links">
								<a href="https://github.com/mmonivis/cycSlope" target="_blank">View GitHub Repository</a>
								<a href="http://cycslope.marissamonivis.com/" target="_blank">View Site</a>
							</div>
						</div>
						<div className="description col-xs-12 col-md-6">
							cycSlope is a route planning web application for users who are looking to choose their routes based on elevation change. Using Google Maps APIs, users can enter any starting and destination point. cycSlope will provide two to four different route options complete with a static map of the route and a visual line graph to display the elevation changes in each.
							<div className="tech-used">
								Google Maps API | jQuery | AJAX | Bootstrap | MySQL | Express | EJS | Node.js
							</div>
						</div>
					</div>
					<div className="travelist-preview hideme">
						<div className="title text-center col-xs-12 col-md-3 col-md-offset-2">
							traveList
							<div className="links">
								<a href="https://github.com/mmonivis/travelist" target="_blank">View GitHub Repository</a>
								<a href="http://travelist.marissamonivis.com/" target="_blank">View Site</a>
							</div>
						</div>
						<div className="description col-xs-12 col-md-6">
							traveList is a web app designed to help travelers stay organized and prepared during all types of travel. The project was inspired by a friend who went on a business trip and noted the difference in packing for business versus packing for leisure. This was created as a tool to help users plan for their upcoming trips based on the type of trip they are taking, including types and settings such as business, international, beach, winter, and more.
							<div className="tech-used">
								OpenWeatherMap API | jQuery | AJAX | Bootstrap | MySQL | Express | Sass / Compass | Node.js
							</div>
						</div>
					</div>
			</div>
		)
	}
}

export default Work;

// <Route path="/cycslope" component={cycSlope} />
// <Route path="/work2" component={cycSlope} />
// <Route path="/work3" component={cycSlope} />