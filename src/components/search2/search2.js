import React,{useEffect,useContext,useMemo} from 'react';
import {MyContext} from '../../context/productFetch';

export default function Search2(){
    const value = useContext(MyContext);

    useEffect(()=>{
      //only Call when directly called as URL
      if(value.state.products.length <= 0){
          let setProducts = value.updateProducts;
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
            value.updateFilters(sizes);
          }) 
        
      }
    },[])

    let state=value.state;
    let products=(state.filteredProducts.length > 0)?state.filteredProducts:state.products;
    //useMemo to re-render only when products (parameter) change
    return useMemo(()=>{
      return <div className='product-list row'>
        
        {(products.length > 0)?
          products.map((el,i)=>{
            let imgUrl= `assets/${el.productImage}`;
            return (<div key={i} className='product-wrapper d-sm-flex flex-sm-column d-md-block col-sm-3'>
                      <img className='product-img' src={require(`../../${imgUrl}`)} alt='product'/>
                      <div className='row'>
                        <div className='col-md-8'>{el.productName}</div>
                        <div className='col-md-4 pl-0'>{el.price}</div>
                        
                      </div>
                    </div>)
          })
        :null}
       
      </div>
    },[products])
    
    
}