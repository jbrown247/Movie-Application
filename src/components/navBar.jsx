import React from 'react';
import { Link, NavLink } from 'react-router-dom';


/* APPLICATION NAME CHANGE GOES HERE */
const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">

            <Link className="navbar-brand text-dark " to="/">Movies For Rent</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link text-light" to="/movies">Movies </NavLink>
                    <NavLink className="nav-item nav-link text-light" to="/customers">Customers</NavLink>
                    <NavLink className="nav-item nav-link text-light" to="/rentals">Rentals</NavLink>
                    <NavLink className="nav-item nav-link text-light" to="/login">Login</NavLink>
                    <NavLink className="nav-item nav-link text-light" to="/register">Register</NavLink>
                </div>
            </div>
        </nav >);
}

export default NavBar;