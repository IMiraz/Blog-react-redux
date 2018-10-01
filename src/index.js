import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link}  from 'react-router-dom'
import Navbar from './Navbar'
import Welcome from './Welcome'
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
<Navbar/>
 <Route exact path="/" component={Welcome}/>
 <Route path="/about" component={about}/>
 <Route path="/contact" component={contact} />
        </div>
    </BrowserRouter>


    , document.getElementById('root'));
registerServiceWorker();
