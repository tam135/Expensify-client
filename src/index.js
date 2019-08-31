import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import './index.css';
import App from './Components/App/App'

import {
    faSearchDollar,
    faEdit,
    faTrashAlt,

} from '@fortawesome/free-solid-svg-icons'

library.add(
    faSearchDollar, // logo
    faEdit,
    faTrashAlt,
    
)

console.log(process.env)
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

