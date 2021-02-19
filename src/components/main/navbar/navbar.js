import React from 'react';
import './navbar.css';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="navbarDiv">
                
                <NavLink to="/products"exact activeClassName="greenBack" className="active">Products</NavLink>
                <NavLink to="/demoScripts" exact className="active" activeClassName="greenBack">Demo Scripts</NavLink>
                <NavLink to="/customers" exact className="active" activeClassName="greenBack">Customers</NavLink>
                <NavLink to="/salesTeam" exact className="active" activeClassName="greenBack">Sales Team</NavLink>
                <NavLink to="/demos" exact className="active" activeClassName="greenBack">Demos</NavLink>
                <NavLink to="/" exact className="active" activeClassName="greenBack">Settings</NavLink>

            </div>
        </div>
    );
}

export default withRouter(Navbar);
