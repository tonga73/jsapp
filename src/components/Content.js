import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import FrontPage from './Pages/FrontPage';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

export default class Content extends Component {
  render() {
    const NoMatch = ({ location }) => (
        <div id="page404">
          <div className="container">
            <h1 className="display-1">PÁGINA INEXISTENTE</h1>
            <h3>Sin coincidencias para <code>{location.pathname}</code></h3>
          </div>
        </div>
      )
    return (
        <div>
            <Switch>
                <Route exact path="/" component={FrontPage} />
                <Route path="/pages/projects" component={Projects} />
                <Route path="/pages/blog" component={Blog} />
                <Route path="/pages/contact" component={Contact} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
  }
}
