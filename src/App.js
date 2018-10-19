import React, { Component } from 'react';
import './App.sass';

import Header from './components/Header';
import Content from './components/Content.js';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content className="content" />
        <Footer />
      </div>
    );
  }
}

export default App;
