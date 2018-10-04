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

handlerSubmit = async (event) => {
  event.preventDefault();
  console.log(this.state)
  try {
    const user = await this.props.loginUser(this.state)

    localStorage.setItem('user', JSON.stringify(user));

           this.props.setAuthUser(user)

           this.props.history.push('/')

   }
     catch(errors){
               this.setState({ errors})
             }

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