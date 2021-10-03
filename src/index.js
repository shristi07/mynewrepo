import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import DriveReducer from './Redux/DriveReducer'
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(DriveReducer, composeWithDevTools());

ReactDOM.render( 
<Provider store = {store}><App /></Provider>
, document.getElementById( 'root' ) );
