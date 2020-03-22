import React, { Component } from 'react';
import './App.css';
import Nav from './components/navigation/nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './components/search/search';
import Context from './context/productFetch';

class App extends Component {
  state={
    filters:[],
    products:[],
    sizes:[],
    filteredProducts:[]
  }

  //Update filters 
  updateFilters = (el)=>{
    this.setState({filters:[...el]})
  }
  //update Products 
  updateProducts=(el)=>{
    this.setState({products:[...el]})
  }
  //Re-render on filter change
  reRender=(el)=>{
    let productList = this.state.products;
    let filterVal = el.target.value;
    let newProducts = [];
    //Iterating through products to get filtered products
    productList.forEach(el => {
      if(el.size.includes(filterVal)){
        newProducts.push(el);
      }
    });
    //setting filtered products for rendering
    this.setState({filteredProducts:newProducts})
  }
  render() {
    return (
      <Router>
      <Context.Provider value={
          {state:this.state,
          updateProducts:this.updateProducts,
          reRender:this.reRender}}>

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Products</h1>
            <Nav filters={this.state.filters}/>
          </header>
          <div className='main-body col'>
            <Route path='/' exact render={prop=><Search filterUpdate={this.updateFilters}/>} />
          </div>
       
        </div>
      </Context.Provider>
      </Router>
    );
  }
}

export default App;
