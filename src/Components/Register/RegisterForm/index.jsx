import React from 'react'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'



const RegisterForm = ({ handerInputChange, handlerSubmit, errors }) => {

     return (

       <div
         className="mh-fullscreen bg-img center-vh p-20"
         style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}
       >

         <div
           className="card card-shadowed p-50 w-400 mb-0"
           style={{maxWidth: '100%'}}
      >

           <h5 className="text-uppercase text-center">Signup</h5>
           <br/>
           <br />

           <form className="form-type-material" onSubmit={handlerSubmit}>
             <div className="form-group">
               <input type="text" name="name" onChange={handerInputChange} className="form-control" placeholder="Username"/>
               {
          errors.name &&
          <small className="text-danger"> {errors.name} </small>

              }
            </div>
             <div className="form-group">
               <input
          type="text"
          name="email"
          onChange={this.handerInputChange}
          className="form-control"
          placeholder="Email address"
          />

               {
    errors.email &&
           <small className="text-danger">{errors.email}</small>

            }

            </div>
            <div className="form-group">
              <input type="password" onChange={this.handerInputChange} name="password" className="form-control" placeholder="Password" />

              {
                errors.password&&
                <small className="text-danger">{errors.password}</small>

              }
            </div>
            <div className="form-group">
              <input type="password" onChange={handerInputChange} name="password_confirmation" className="form-control" placeholder="Password (confirm)" />
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

RegisterForm.propTypes = {
 handerInputChange: propTypes.func.isRequired,
  handlerSubmit:propTypes.func.isRequired,
errors:propTypes.objectOf(propTypes.string).isRequired
}

export default RegisterForm