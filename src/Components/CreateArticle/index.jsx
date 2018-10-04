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
  // console.log(event.target.files)
  this.setState({
[event.target.name]: event.target.type === 'file'? event.target.files[0]:  event.target.value
})

}

handlerSubmit =  (event) => {
  event.preventDefault();

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