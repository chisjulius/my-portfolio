import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar =() => {
    return (
         <React.Fragment>
            <nav className="nav-wraper indigo darken-4">
                <div className="container">
                    <NavLink className="brand-logo " to="/">chisjulius</NavLink>
                    <Link className="sidenav-trigger"  id="#" data-target="mobile-links">
                      <i className="material-icons">menu</i>
                   </Link>
                    <ul className="right hide-on-med-and-down">
                        <li className="nav-list"><NavLink exact to="/" className="main-nav">Home</NavLink></li>
                        <li className="nav-list" ><NavLink exact to="/about" className="main-nav">About</NavLink></li>
                        <li className="nav-list" ><NavLink exact to="/project" className="main-nav">Projects</NavLink></li>
 
                    </ul>  
                </div>  
                  <ul className="sidenav"  id="mobile-links">
                        <li><NavLink to="/" className="indigo-text darken-4">Home</NavLink></li>
                        <li><NavLink to="/about" className="indigo-text darken-4">About</NavLink></li>
                        <li><NavLink to="/project" className="indigo-text darken-4">Projects</NavLink></li>
                    </ul>  
            </nav>  

        </React.Fragment>
    )
}

export default Navbar