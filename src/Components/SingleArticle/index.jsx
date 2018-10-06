import React, {Component} from 'react'
import Article from './Article'


class  SingleArticle extends Component {

  state = {

    article:null,
    loading:true

  }


 async componentWillMount(slug) {

    console.log(this.props)

    const article = await this.props.getArticle(this.props.match.params.slug)

    this.setState({ article, loading:false })

  }

   render() {
     return (

        <div>
        {

         !this.state.loading &&
      <Article
      article={this.state.article}
      />
        }

        {
           this.state.loading &&
            <p style={{color:'black', textAlign:"center"}}>Loading ...</p>

        }


        </div>


     )

   }

}

export default SingleArticle