import React, { Component } from 'react';
import './App.css';
import Nav from './components/navigation/nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './components/search/search';
import Context from './context/productFetch';

class App extends Component {
  
  render() {
    return (
      <Router>
      <Context >

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Products</h1>
            <Nav />
          </header>
          <div className='main-body col'>
            <Route path='/' exact component={Search} />
          </div>
       
        </div>
      </Context>
      </Router>
    );
  }
}

export default App;
