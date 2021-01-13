import React from "react";
import {NavLink} from "react-router-dom";
import logo from '../img/bugtrackerLogo.png'
import '../styles/Navbar.scss'

export const Navbar = () => (
    <nav className="navbar_box">
        <NavLink to="/" exact className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="Жучок" className="navbar_logo-imgLogo"/>
            </div>
            <div className="nav_title">
                <p className="nav_title-text">
                    SumDU Bug Tracker
                </p>
            </div>
        </NavLink>
    </nav>
)
