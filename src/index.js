import React, {Component} from 'react';
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
import AuthService from './services/auth'


class App extends Component {

 state ={
     authUser:null
 }


 componentDidMount () {

    const user = localStorage.getItem('user');

    if(user) {
         this.setState ( {
authUser:JSON.parse(user)
         })
    }

 }

 setAuthUser = (authUser) => {

    this.setState({
        authUser
    })



 }




     render () {

        const {location} = this.props;


          return(
            <div>
            {
                location.pathname !=="/login" && location.pathname !=="/signup" &&
                <Navbar authUser={this.state.authUser}/>

            }


        <Route exact path="/" component={Welcome}/>
        <Route path ="/login" component={Login}/>
        <Route path="/signup" render={
            (props) => <Register {...props}
              registerUser= {this.props.authService.registerUser}
             setAuthUser={this.setAuthUser}/> }/>
        <Route path="/article/:slug" component={SingleArticle}/>
        <Route path="/articles/create" component={CreateArticle}/>>

        {
           location.pathname !=="/login" && location.pathname !=="/signup" &&
           <Footer/>

       }

               </div>

          )
     }
}







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
