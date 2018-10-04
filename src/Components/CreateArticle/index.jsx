import React, {Component} from 'react'
import CreateArticleForm from './CreateArticleForm'



class CreateArticle  extends Component
{
  state = {
    image:null,
    title:'',
    content:'',
   channel:null,
   errors:{}
 }

 handerInputChange = (event) => {
  this.setState({
[event.target.name]: event.target.value
})

}

handlerSubmit =  (event) => {
  event.preventDefault();
  console.log(this.state)
}
  render() {

    return (
         <CreateArticleForm
         handerInputChange={this.handerInputChange}
         handlerSubmit = {this.handlerSubmit}

         />

    )


  }


}

export default CreateArticle