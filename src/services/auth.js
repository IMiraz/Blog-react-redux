import axios  from  'axios'
import {validateAll} from 'indicative'
import config from '../Components/config'

export default class AuthService {

async registerUser(data) {


    const rules= {
      name:'required|string',
      email:'required|email',
    password:'required|string|min:6|confirmed'
    };

//Customising Message

    const message = {
      required:'This field is required',
      'email.email':' The email is invalid',
      'password.confirmed': 'the  password confirmation does not match'

    }


try {
await validateAll(data, rules, message)


          try  {
            const values = {
              name:data.name,
              email:data.email,
              password:data.password

                }
    const response = await axios.post(`${config.apiUrl}/auth/register`, values)
      return response.data.data
          }
              catch(errors){
                const formattedError = {}

                errors.forEach(error => formattedError[error.field] = error.message)
                // console.log(formattedError);
                return formattedError

              }

}

catch (errors) {
  const formattedError = {}

  errors.forEach(error => formattedError[error.field] = error.message)
  // console.log(formattedError);

        this.setState({

      errors:formattedError

      })

}

}
}