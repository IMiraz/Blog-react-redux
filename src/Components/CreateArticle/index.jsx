import React, {Component} from 'react'
import CreateArticleForm from './CreateArticleForm'



class CreateArticle  extends Component
{
  state = {
    image:null,
    title:'',
    content:'',
    category:null,
   errors:{},
   categories:[]
 }

 async  componentWillMount () {
      const categories= await this.props.getArticle()

      this.setState ( {
         categories
      })


 }

 handerInputChange = (event) => {
  // console.log(event.target.files)
  this.setState({
[event.target.name]: event.target.type === 'file'? event.target.files[0]:  event.target.value
})

}

handlerSubmit = async  (event) => {
  event.preventDefault();

  await this.props.createArticle(this.state)


}
  render() {

    return (
         <CreateArticleForm
         handerInputChange={this.handerInputChange}
         handlerSubmit = {this.handlerSubmit}
         categories ={this.state.categories}

         />

    )


  }


}

export default CreateArticle