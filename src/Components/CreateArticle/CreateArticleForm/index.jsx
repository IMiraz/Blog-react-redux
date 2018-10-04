import React from 'react'
import Banner from '../../Banner'

const CreateArticleForm = ({handerInputChange , handlerSubmit, categories}) =>
{
    return (
        <div>
        <Banner
        backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
        title="Write an article"
        />
        <main className="main-content">
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <form className="p-30 bg-gray rounded" onSubmit={handlerSubmit} >
                    <div className="row">
                      <div className="form-group col-md-12 my-5">
                        <input type="file" className="form-control" name="image" onChange={handerInputChange} />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <input className="form-control form-control-lg" type="text" name="name" placeholder="Title"  name="title" onChange={handerInputChange}/>
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <select name="category" onChange={handerInputChange} id className="form-control form-control-lg">
                          <option value>Select category</option>
                        {categories.map(categorie =><option key={categorie.id} value={categorie.id} >{categorie.name}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea name="content" onChange={handerInputChange} className="form-control form-control-lg" rows={4} placeholder="Content" defaultValue={""} />
                    </div>
                    <div className="text-center">
                      <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>


    )

}

export default CreateArticleForm