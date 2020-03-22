import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Product} from './context/productFetch';

ReactDOM.render(
<Product>
<Router>
    <App />
</Router>
</Product>, document.getElementById('root'));
