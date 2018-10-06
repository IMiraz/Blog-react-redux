import React from 'react'

import Article from './../../Article'
import Banner from './../../Banner'


const Articles  = ({ articles , handlePagination, nextUrl, prevUrl }) => {

    return (
        <div>

        <Banner
      backgroundImage="url(assets/img/bg-gift.jpg)"
      title="Latest Blog Posts"
      subtitle="Read and get updated on how we progress."

      />
      <main class="main-content bg-gray">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">

        {articles && articles.map(article => (
            <div key={article.id}>
              <Article article={article} />
              <hr />
            </div>))}
<nav className="flexbox mt-50 mb-50">
<a className={`btn btn-white ${prevUrl ? '' : 'disabled'}`} onClick={() => handlePagination(prevUrl)}>
Preview Page
    <i className="ti-arrow-left fs-9 ml-4" />
  </a>
  <a className={`btn btn-white ${nextUrl ? '' : 'disabled'}`} onClick={() => handlePagination(nextUrl)}>
    <i className="ti-arrow-right fs-9 mr-4" /> Next Page</a>

</nav>

        </div>
        </div>
</main>
      </div>)

}

export default Articles