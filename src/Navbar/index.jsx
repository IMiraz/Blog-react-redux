import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

     return (
          <div>
          <ul>
          <li><Link to="/">root page</Link></li>
          <li><Link to="/about">about page</Link></li>
          <li> <Link to="/contact">contact page</Link></li>
         </ul>
          </div>
     )
}

export default Navbar