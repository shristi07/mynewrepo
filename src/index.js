import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import CartReducer from './Redux/CartReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(CartReducer, composeWithDevTools());

ReactDOM.render( 
<Provider store = {store}><App /></Provider>
, document.getElementById( 'root' ) );
registerServiceWorker();
