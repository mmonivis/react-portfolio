// Functionality Components
import React, { Component } from 'react';
import $ from 'jquery';

// Custom Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';


class App extends Component {
  render() {

    return (
        <div className="content-window co-xs-12 colorOne">
            <Header />
            <Home />
            <About />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
  }
}

export default App;
