import React from 'react'
import propTypes from 'prop-types'


const Banner = ({backgroundImage, title, subtitle}) => {
return (
    <header className="header header-inverse" style={{backgroundImage}} data-overlay={8}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>{title}</h1>
              <p className="fs-20 opacity-70">{subtitle}</p>
            </div>
          </div>
        </div>
      </header>
)


}

Banner.propTypes = {
   backgroundImage:propTypes.string.isRequired,
   title:propTypes.string.isRequired,
   subtitle:propTypes.string.isRequired,
}



export default Banner