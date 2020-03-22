import React, {PureComponent} from 'react';
import {MyContext} from '../../context/productFetch';

import './nav.css';

class Nav extends PureComponent{
      //Attaching context to be consumed
       static contextType=MyContext;
        render(){
           let filters=this.context.state.filters;
           let state=this.context;
        return(
            <nav className='navigation row'>
            <div className='col-sm-8'>Women's tops</div>
            
            <select onChange={state.reRender} className='filter-select col-sm-3 mx-3'>
                <option>Size filters</option>

                {filters.map((el,i) => {
                   return (<option key={i} value={el}>{el}</option>) 
                })}

            </select>
          </nav>
        )
        }
    
}

export default Nav;