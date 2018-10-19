import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import FrontPage from './Pages/FrontPage';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

export default class Content extends Component {
  render() {
    return (
        <Switch>
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
        </Switch>
    )
  }
}
