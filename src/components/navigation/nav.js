import React, {useContext, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {MyContext} from '../../context/productFetch';

import './nav.css';

function Nav() {
         //Attaching context to be consumed
         const value =useContext(MyContext);
         //creating filter as selector
         let filters=value.state.filters;
         let Title = value.state.title;
         //useMemo to save re-rendering on Context change
         //re-render only on filter and title update
         return useMemo(()=>{

            return <nav className='navigation row mb-2'>
               <div className='col-12 py-2'>
               <Link to='/hooks'>Hooks</Link>
               </div>
               <div className='col-sm-8'>{Title}</div>
               <select onChange={value.reRender} className='filter-select col-sm-3 mx-3'>
                  <option>Size filters</option>

                  {filters.map((el,i) => {
                     return (<option key={i} value={el}>{el}</option>) 
                  })}

               </select>
            </nav>
         },[filters,Title])
    
}

export default Nav;