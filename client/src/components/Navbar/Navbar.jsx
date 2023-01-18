import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {

    return (
        <div className="container-nav">
            <ul className="lista-ul">
                <Link to="/home"><li className="home-list">Home</li></Link>
                <Link to="/create"><li className="create-list">Create Recipe</li></Link>
            </ul>
        </div>
    )
}
