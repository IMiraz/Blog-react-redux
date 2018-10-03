import React, {Component} from 'react'

import  LoginForm from './LoginForm'



class Login extends Component {

   state = {
      email:'',
      password:''
   }

   handerInputChange = (event) => {
    this.setState({
  [event.target.name]: event.target.value
    })

}

handlerSubmit = (event) => {
  event.preventDefault();
  console.log(this.state)

}
   render() {
      return (
      <LoginForm
      handerInputChange={this.handerInputChange}
      handlerSubmit={this.handlerSubmit}
      />
      )
   }
}

export default Login