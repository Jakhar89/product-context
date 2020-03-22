import React, { Component } from 'react';
import './search.css';
import Context from '../../context/productFetch';

class Search extends Component {

  constructor(props) {
    super(props);
  
  }
  componentDidMount(){
    let setProducts = this.context.updateProducts;
    let sizes=[];
    //Fetching JSON data through API
   fetch('https://api.jsonbin.io/b/5e748418c4a5cb1628678528/1')
    .then(res=>res.json())
    .then(res=>{
      setProducts(res);
      //Iterate array to look for maximum sizes for filter value
      res.forEach(el => {
        if(sizes.length < el.size.length){
          sizes= [...el.size]
        }

      });
      //updating filters through props
      this.props.filterUpdate(sizes);
    }) 
  }
  

  render() {
    let state=this.context.state;
    let products=(state.filteredProducts.length > 0)?state.filteredProducts:state.products;
    return (
      <div className='product-list row'>
        
        {(products.length > 0)?
          products.map((el,i)=>{
            let imgUrl= `assets/${el.productImage}`;
            return (<div key={i} className='product-wrapper col-sm-3'>
                      <img className='product-img' src={require(`../../${imgUrl}`)} alt='product'/>
                      <div className='row'>
                        <div className='col-md-8'>{el.productName}</div>
                        <div className='col-md-4'>{el.price}</div>
                        
                      </div>
                    </div>)
          })
          
        :null}
       
      </div>
    );
  }
}
Search.contextType=Context

export default Search;
