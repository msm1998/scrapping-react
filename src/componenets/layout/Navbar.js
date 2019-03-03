import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div>
            <nav className="grey lighten-2 z-depth-0 ">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><i className="large material-icons">album</i></a>
                    <a href="#" className="sidenav-trigger" data-target="mobile-nav"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to ='/'>Dashboard</Link></li>
                        <li><Link to='About'>About</Link></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Charts</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-nav" >
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Charts</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </div>        
 
        );
}

export default Navbar;