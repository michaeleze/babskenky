import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './nav/nav';
import Views from './routes/views';
import Footer from './footer/footer';


class App extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Views/>
          <Footer/>
      </div>
    );
  }
}

export default App;
