import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Main} from './components/Main'
import {CleanUp} from "./components/CleanUp";
import {SkipEffect} from "./components/SkipEffect";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SkipEffect/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
