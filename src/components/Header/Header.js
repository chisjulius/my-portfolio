import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

const Header =() =>{
    return (
        <div>
            <header>
             <div className="navigation">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                <i className="material-icons">menu</i>
                </label>
                <label className="logo">chisjulius</label>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/about">About</NavLink></li>
                        <li><NavLink exact to="/project">Project</NavLink></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header