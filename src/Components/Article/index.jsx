import React from 'react'

const Article = ({article }) => {
    return (
        <article className="mt-90">
  <header className="text-center mb-40">
    <h3>
      <a href="blog-single.html">{article.title}</a>
    </h3>
    <div className="link-color-default fs-12">
      <a href="#">{article.category.name}</a>,
      <time>{(new Date(article.created_at)).toDateString()}</time>
    </div>
  </header>
  <a href="blog-single.html">
    <img className="rounded" src={article.imageUrl} alt="..." />
  </a>
  <div className="card-block">
    <p className="text-justify">{`${article.content.substring(0, 90)}...`}</p>
    <p className="text-center mt-40">
      <a className="btn btn-primary btn-round" href="blog-single.html">Read more</a>
    </p>
  </div>
</article>


    )
}
export default Article
