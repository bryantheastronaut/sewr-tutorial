//app/index.js

import React from 'react';
import { render } from 'react-dom';
import App from './App';


//use our render method to place our App component in the div with the id of 'root'
render(<App />, document.querySelector('#root'));
