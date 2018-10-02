import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link}  from 'react-router-dom'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Register from './Components/Register'
import SingleArticle from './Components/SingleArticle'
import CreateArticle from './Components/CreateArticle'
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
 <Route path ="/login" component={Login}/>
 <Route path="/register" component={Register}/>
 <Route path="/about" component={about}/>
 <Route path="/contact" component={contact} />
 <Route path="/article/:slug" component={SingleArticle}/>
 <Route path="/articles/create" component={CreateArticle}/>>
 <Footer/>
        </div>
    </BrowserRouter>


    , document.getElementById('root'));
registerServiceWorker();
