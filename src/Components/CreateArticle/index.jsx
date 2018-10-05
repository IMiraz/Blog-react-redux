import React, {Component} from 'react'
import CreateArticleForm from './CreateArticleForm'



class CreateArticle  extends Component
{
  state = {
    image:null,
    title:'',
    content:'',
    category:null,
   errors:[],
   categories:[],
   loading:false
 }

 async  componentWillMount () {
      const categories= await this.props.getCategories()

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

  try {
    const  article = await this.props.createArticle(this.state, this.props.token)
    this.setState({ loading:true })
  this.props.history.push('/')
  }


    catch(errors) {
      console.log(errors)

      this.setState({ errors });

    }



}
  render() {

    return (
         <CreateArticleForm
         handerInputChange={this.handerInputChange}
         handlerSubmit = {this.handlerSubmit}
         categories ={this.state.categories}
         errors = {this.state.errors}
         loading= {this.state.loading}
         />
    )


  }


}

export default CreateArticle