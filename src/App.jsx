import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/CustomNavbar';
import Industry from './components/Industry';
import Footer from './components/CustomFooter';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/stores/:storeId" component={Industry} />
          <Route path="/about" component={About} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;