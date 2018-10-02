import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {validateAll} from 'indicative'



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
  handlerSubmit = (event) => {
event.preventDefault();
    //console.log(this.state)
//Validating user data
 const data = this.state;

const rules= {
  name:'required|string',
  email:'required|email',
 password:'required|string|min:6|confirmed'
};

validateAll(data, rules)
.then(res=>{
  console.log('SUCCESS')
})

.catch(errors=> {

  //console.log(error)
const formattedError = {}

  errors.forEach(error => formattedError[error.field] = error.message)
  // console.log(formattedError);

  this.setState({

errors:formattedError

})


})


  }

  render (){
      return (
        <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}>
        <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
          <h5 className="text-uppercase text-center">Signup</h5>
          <br />
          <br />
          <form className="form-type-material" onSubmit={this.handlerSubmit}>
            <div className="form-group">
              <input type="text" name="name" onChange={this.handerInputChange} className="form-control" placeholder="Username" />

              {
                this.state.errors['name'] &&
                <small className="text-danger">{this.state.errors['name']}</small>

              }
            </div>
            <div className="form-group">
              <input type="text" name="email" onChange={this.handerInputChange}
             className="form-control" placeholder="Email address" />


             {
              this.state.errors['email'] &&
              <small className="text-danger">{this.state.errors['email']}</small>

            }

            </div>
            <div className="form-group">
              <input type="password" onChange={this.handerInputChange} name="password" className="form-control" placeholder="Password" />

              {
                this.state.errors['password'] &&
                <small className="text-danger">{this.state.errors['password']}</small>

              }
            </div>
            <div className="form-group">
              <input type="password" onChange={this.handerInputChange} name="password_confirmation" className="form-control" placeholder="Password (confirm)" />
            </div>
            <br />
            <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
          </form>
          <hr className="w-30" />
          <p className="text-center text-muted fs-13 mt-20">Already have an account?
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
      )
  }



}



export default Signup