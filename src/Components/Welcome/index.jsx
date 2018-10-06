import React,{Component} from 'react'
import Articles from './Articles'

class  Welcome extends Component {

  constructor() {
    super();

    this.state = {
      articles: {},
      loading:true
    };
  }

  async componentWillMount() {
    const articles = await this.props.getArticles();

    this.setState({ articles, loading:false });
    //this.props.setArticles(articles.data);
  }

 handlePagination = async (url) => {
const articles = await this.props.getArticles(url);
this.setState({articles});
 }

  render() {
    return (
       <div>
        {
          !this.state.loading &&
          <Articles
        articles={this.state.articles.data}
         nextUrl={this.state.articles.next_page_url}
          prevUrl={this.state.articles.prev_page_url}
        handlePagination={this.handlePagination}
      />
        }

         {
           this.state.loading &&
           <p style={{color:'black', textAlign:"center"}}>Loading ...</p>

         }

       </div>

    );
  }
}



export default Welcome