import React, { Component } from 'react';
const MyContext=React.createContext();
class Product extends Component{
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
    render(){
    return <MyContext.Provider value={
        {state:this.state,
        updateProducts:this.updateProducts,
        updateFilters:this.updateFilters,
        reRender:this.reRender}}>
            {this.props.children}
        </MyContext.Provider>
    }
}

export {Product,MyContext};