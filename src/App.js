import React, { Component } from 'react';
import './App.css';
import Nav from './components/navigation/nav';
import {Switch, Route} from 'react-router-dom';
import Search from './components/search/search';
import Search2 from './components/search2/search2';

class App extends Component {
  
  render() {
    return (
      
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Products</h1>
            <Nav />
          </header>
          <div className='main-body col'>
          <Switch>
            <Route path='/' exact component={Search} />
            <Route path='/hooks' exact component={Search2} />
          </Switch>
          </div>
        </div>

    );
  }
}

export default App;
