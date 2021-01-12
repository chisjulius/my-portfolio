import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar =() => {
    return (
        <React.Fragment>
        <nav className="grey darken-4">
            <div className="container" >
                <div className="row">
                    <div className="col s12 l4 center offset-l4 nav">      
                        <NavLink exact to="/" className="main-nav">Home</NavLink>
                        <NavLink exact to="/about" className="main-nav">About</NavLink>
                        <NavLink exact to="/project" className="main-nav">Projects</NavLink>  
                    </div>
                </div>

            </div>  
        </nav>  
    </React.Fragment>
    )
}

export default Navbar