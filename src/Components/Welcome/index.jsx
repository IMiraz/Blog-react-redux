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

    this.setState({ articles });
    //this.props.setArticles(articles.data);
  }

  render() {
    return (
      <Articles
        articles={this.state.articles.data}
      />
    );
  }
}



export default Welcome