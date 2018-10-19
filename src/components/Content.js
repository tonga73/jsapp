import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import FrontPage from './Pages/FrontPage';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

export default class Content extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" render={
                () => {
                return (
                    <div>
                    <FrontPage />
                    </div>
                )
                }
            } />
            <Route path="/pages/projects" render={ () => { return <Projects /> } } />
            <Route path="/pages/blog" render={ () => { return <Blog /> } } />
            <Route path="/pages/contact" render={ () => { return <Contact /> } } />
          </div>
        </Router>
    )
  }
}
