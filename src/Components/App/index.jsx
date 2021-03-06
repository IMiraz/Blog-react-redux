import React,{Component} from 'react'
import {Route}  from 'react-router-dom'
import propTypes from 'prop-types'
import Navbar from '../Navbar'
import Welcome from '../Welcome'
import Footer from '../Footer'
import Login from '../Login'
import Register from '../Register'
import SingleArticle from '../SingleArticle'
import CreateArticle from '../CreateArticle'


class App extends Component {

    state ={
        authUser:null,
        articles:[]
    }


    componentWillMount () {

       const user = localStorage.getItem('user');

            if(user) {
                    this.setState ( {
                    authUser:JSON.parse(user)
                    })
                    }

            }

    setAuthUser = (authUser) =>
                    {

                    this.setState({
                        authUser
                    })

                    }


setArticles = (articles) =>
{
this.setState({
     articles
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


           <Route exact path="/"render={
            (props) =>
                      <Welcome {...props}

                      getArticles= {this.props.aritclesService.getArticles}
                      setArticles={this.setArticles}

              /> }/>

           <Route path ="/login"  render = { (props) =>
            <Login {...props}
            loginUser={this.props.authService.loginUser}
            setAuthUser ={this.setAuthUser} />
         }
         />
           <Route path="/signup" render={
               (props) =>
                         <Register {...props}
                      registerUser= {this.props.authService.registerUser}
                setAuthUser={this.setAuthUser}
                 /> } />
           <Route path="/article/:slug"
           render = { (props) =>
             <SingleArticle {...props}

           getArticle={this.props.aritclesService.getAritcle}
           articles={this.state.articles}
           />}/>


           <Route path="/articles/create" render={
            (props) =>

            <CreateArticle {...props}
              getCategories= {this.props.aritclesService.getCategories}
             setAuthUser={this.setAuthUser}
             createArticle = {this.props.aritclesService.createArticle}
             token = {this.state.authUser.token}
             /> }/>

           {
              location.pathname !=="/login" && location.pathname !=="/signup" &&
              <Footer/>

          }

                  </div>

             )
        }
   }

   App.propTypes = {
  location:propTypes.shape({
  pathname:propTypes.string.isRequired,
}).isRequired,

authService:propTypes.objectOf(propTypes.func).isRequired,

   }

   export default App


