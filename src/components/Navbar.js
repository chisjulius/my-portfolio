import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar =() => {
    return (
         <React.Fragment>
            <nav className="nav-wraper grey darken-3">
                <div className="container">
                    <Link className="brand-logo logo" to="/">chisjulius</Link>
                    <a className="sidenav-trigger"  id="#" data-target="mobile-links">
                      <i className="material-icons">menu</i>
                   </a>
                    <ul className="right hide-on-med-and-down">
                        <li className="nav-list"><NavLink exact to="/" className="main-nav">Home</NavLink></li>
                        <li className="nav-list" ><NavLink exact to="/about" className="main-nav">About</NavLink></li>
                        <li className="nav-list" ><NavLink exact to="/project" className="main-nav">Projects</NavLink></li>
                        <li><a href="https://www.facebook.com/chisom.julius" target="_blank" className="tooltipped btn-floating btn-small grey darken-4" data-tooltip="facebook">
                            <i className="fab fa-facebook"></i>
                        </a></li>
                        <li><a href="https://www.instagram.com/chisom_julius/" target="_blank" className="tooltipped btn-floating btn-small grey darken-4" data-tooltip="instagram">
                            <i className="fab fa-instagram"></i>
                        </a></li>
                        <li><a href="https://twitter.com/ChisomJavi?s=08" target="_blank" className="tooltipped btn-floating btn-small grey darken-4" data-tooltip="twitter">
                            <i className="fab fa-twitter"></i>
                        </a></li>
                    </ul>  
                </div>  
            </nav>
            <ul className="sidenav"  id="mobile-links">
                        <li><NavLink exact  to="/" className="grey-text darken-4">Home</NavLink></li>
                        <li><NavLink exact  to="/about" className="grey-text darken-4">About</NavLink></li>
                        <li><NavLink exact  to="/project" className="grey-text darken-4">Projects</NavLink></li>
                    </ul>   
        </React.Fragment>
    )
}

export default Navbar