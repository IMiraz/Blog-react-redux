import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, withRouter}  from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import AuthService from './services/auth'
import App from './Components/App'



const Main =withRouter((props) => {

    return (
       <App authService = { new AuthService()} {...props}/>
    )

})


ReactDOM.render(
    <BrowserRouter>
  <Main/>
    </BrowserRouter>


    , document.getElementById('root'));
registerServiceWorker();
