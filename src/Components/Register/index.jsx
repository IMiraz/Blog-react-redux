/* eslint-disable */
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {validateAll} from 'indicative'
import axios  from  'axios'
import config from '../config'
import RegisterForm from  './RegisterForm'

class Signup extends Component {

    state = {
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
      errors:{}
      }




  handerInputChange = (event) => {
        this.setState({
      [event.target.name]: event.target.value
        })

  }
  handlerSubmit = async (event) =>
  {
    console.log(this.state)
event.preventDefault();
 try {
       const user = await this.props.registerUser(this.state)
       localStorage.setItem('user', JSON.stringify(user));
              this.props.setAuthUser(user)
              this.props.history.push('/')

      }
        catch(errors){
                  this.setState({ errors})
                }

 }


  render (){
      return (
         <RegisterForm
         handerInputChange={this.handerInputChange}
         handlerSubmit={this.handlerSubmit}
         errors={this.state.errors}

         />

      )
  }



}



export default Signup