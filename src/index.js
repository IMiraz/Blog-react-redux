import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, withRouter}  from 'react-router-dom'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Register from './Components/Register'
import SingleArticle from './Components/SingleArticle'
import CreateArticle from './Components/CreateArticle'
import registerServiceWorker from './registerServiceWorker';


const Main =withRouter(({location }) => {

    return (
        <div>
             {
                 location.pathname !=="/login" && location.pathname !=="/signup" &&
                 <Navbar/>

             }


         <Route exact path="/" component={Welcome}/>
         <Route path ="/login" component={Login}/>
         <Route path="/signup" component={Register}/>
         <Route path="/article/:slug" component={SingleArticle}/>
         <Route path="/articles/create" component={CreateArticle}/>>

         {
            location.pathname !=="/login" && location.pathname !=="/signup" &&
            <Footer/>

        }

                </div>
    )

})


ReactDOM.render(
    <BrowserRouter>
  <Main/>
    </BrowserRouter>


    , document.getElementById('root'));
registerServiceWorker();
