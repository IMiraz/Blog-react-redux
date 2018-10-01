import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route}  from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const about = () => {
     return <h1>this is about</h1>
}


const contact = () => {
    return <h1>this is contact</h1>
}

ReactDOM.render(
    <BrowserRouter>
        <div>
 <Route exact path="/" component={App}/>
 <Route path="/about" component={about}/>
 <Route path="/contact" component={contact} />
        </div>
    </BrowserRouter>


    , document.getElementById('root'));
registerServiceWorker();
